import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { apollo } from '@root/api/Apollo';
import { gqlURI } from '@root/api/config';

apollo.init({ getUrl: gqlURI });

class BaseService {
	client: ApolloClient<NormalizedCacheObject> = apollo.get();
}

export default BaseService;
