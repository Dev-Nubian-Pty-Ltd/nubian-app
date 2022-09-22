import { useMutation } from '@apollo/client';
import { StoreContext } from '@root/stores/stores.context';
import { useContext } from 'react';

const { sessionStore } = useContext(StoreContext);

export interface SignInRequest {
	email: string | undefined;
	password: string | undefined;
}

const signIn = async (signInRequest: SignInRequest): Promise<void> => {
	try {
		const [createSession] = useMutation(sessionStore.resolver.SIGN_IN);
		const { data } = await createSession({
			variables: { ...signInRequest },
		});

		if (data) {
			const { createSession } = data;
			if (createSession.token) {
				await sessionStore.setAccessToken(createSession.token);
				await sessionStore.setAutheticated(true);
			}
		}
	} catch (error) {
		await sessionStore.setError(error);
	}
};

const signUp = async (): Promise<void> => {
	console.log('heloo');
};

const signedIn = async (): Promise<void> => {
	console.log('heloo');
};

const signOut = async (): Promise<void> => {
	console.log('goobye');
};

export default { signUp, signIn, signedIn, signOut };
