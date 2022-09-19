import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const get = () => apolloClient;
const init = (options: { getUrl: string }) => {
	if (apolloClient) return apolloClient;

	const { getUrl } = options;
	if (!getUrl) return;

	const cache = new InMemoryCache({
		addTypename: true,
	});

	const httpLink: HttpLink = new HttpLink({
		credentials: 'include',
		uri: getUrl,
	});

	const wsLink =
		typeof window !== 'undefined'
			? new GraphQLWsLink(
					createClient({
						webSocketImpl: WebSocket,
						url: 'ws://localhost:8000/graphql',
					}),
			  )
			: null;

	const splitLink: ApolloLink | null =
		typeof window !== 'undefined' && wsLink != null
			? split(
					({ query }) => {
						const definition = getMainDefinition(query);
						return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
					},
					wsLink,
					httpLink,
			  )
			: null;

	apolloClient = new ApolloClient({
		link: splitLink || undefined,
		cache,
		connectToDevTools: true,
	});

	return apolloClient;
};

export const apollo = {
	get,
	init,
};
