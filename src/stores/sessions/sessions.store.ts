import { SessionsResolver } from '@api/graphql';
import { ApolloError } from '@apollo/client';
import { makeAutoObservable } from 'mobx';
import { getPersistedStore, makePersistable } from 'mobx-persist-store';

interface Session {
	id: string;
	token: string;
	userId: string;
}
export class SessionsStore {
	accessToken: string | null = null;
	authenticated = false;
	error: ApolloError | null = null;
	loading = false;
	resolver: typeof SessionsResolver;
	sessions: Session[] = [];

	constructor(sessionsResolver: typeof SessionsResolver) {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'SessionsStore',
			properties: ['accessToken', 'authenticated', 'error', 'loading', 'sessions'],
			storage: typeof window !== 'undefined' ? window.localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});

		this.getAccessToken().then((data) => {
			this.authenticated = data ? true : false;
		});

		this.resolver = sessionsResolver;
	}

	async isAuthenticated(): Promise<boolean> {
		const data = await getPersistedStore(this);
		if (data && data.authenticated) return data.authenticated;
		return false;
	}

	isLoading() {
		return this.loading;
	}

	isError() {
		return this.error;
	}

	async getSessions() {
		const data = await getPersistedStore(this);
		return await data?.sessions;
	}

	async getAccessToken() {
		const data = await getPersistedStore(this);
		return data?.accessToken;
	}

	async setError(error: ApolloError | any) {
		this.error = error;
	}

	async setLoading(loading: boolean) {
		this.loading = loading;
	}

	async setAutheticated(authenticated: boolean) {
		this.authenticated = authenticated;
	}

	async setAccessToken(accessToken: string | null) {
		this.accessToken = accessToken;
	}

	clearSession() {
		this.setAccessToken(null);
		this.setAutheticated(false);
	}
}
