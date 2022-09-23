import { apollo } from '@root/api/Apollo';
import { gqlURI } from '@root/api/config';
import { SessionsResolver } from '@root/api/graphql';
import BaseService from './Base.service';
import { LoginRequestInput } from './dto/sessions/sessions.dto';

apollo.init({ getUrl: gqlURI });

class SessionsService extends BaseService {
	signIn = async (loginRequest: LoginRequestInput) => {
		try {
			const result: any = await this.client.mutate({
				mutation: SessionsResolver.SIGN_IN,
				variables: { ...loginRequest },
			});
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default new SessionsService();
