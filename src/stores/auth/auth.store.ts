import { AuthService } from '@api/graphql';
import { ApolloError } from '@apollo/client';
import { makeAutoObservable } from 'mobx';
import { getPersistedStore, makePersistable } from 'mobx-persist-store';

export class AuthStore {
	accessToken: string | null = null;
	authenticated = false;
	error: ApolloError | null = null;
	loading = false;
	service: typeof AuthService;

	constructor(authService: typeof AuthService) {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'AuthStore',
			properties: ['accessToken', 'authenticated', 'error', 'loading'],
			storage: typeof window !== 'undefined' ? window.localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});

		this.getAccessToken().then((data) => {
			this.authenticated = data ? true : false;
		});

		this.service = authService;
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

	async signin(signinRequest: any, mutation: any = {}) {
		const [createSession] = mutation;
		const { data, error, loading } = await createSession({
			variables: {
				email: signinRequest.email,
				password: signinRequest.password,
			},
		});
		let SignInData;

		if (loading) this.setLoading(loading);
		if (data.createSession.token) {
			const { createSession } = data;
			SignInData = createSession;
			this.setAccessToken(createSession.token);
			this.setAutheticated(true);
		}
		if (error) this.setError(error);
		return {
			loading,
			error,
			data: SignInData,
		};
	}

	async signout(signoutRequest: any, mutation: any = {}) {
		const [deleteSession] = mutation;
		try {
			const { data, error, loading } = await deleteSession({
				variables: {
					...signoutRequest,
				},
			});
			if (loading) this.setLoading(loading);
			if (error) this.setError(error);
			if (data.deleteSession) {
				localStorage.removeItem('nubian-token');
				this.setAutheticated(false);
			}
		} catch (error) {
			this.setError(error);
		}
	}

	async getAccessToken() {
		const data = await getPersistedStore(this);
		return data?.accessToken;
	}

	private setError(error: ApolloError | any) {
		this.error = error;
	}

	private setLoading(loading: boolean) {
		this.loading = loading;
	}

	private setAutheticated(authenticated: boolean) {
		this.authenticated = authenticated;
	}

	private setAccessToken(accessToken: string | null) {
		this.accessToken = accessToken;
	}

	clearSession() {
		this.setAccessToken(null);
		this.setAutheticated(false);
	}
}
