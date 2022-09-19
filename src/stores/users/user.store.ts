import { UserService } from '@api/graphql';
import { ApolloError } from '@apollo/client';
import { makeAutoObservable } from 'mobx';
import { clearPersistedStore, getPersistedStore, isHydrated, isPersisting, makePersistable } from 'mobx-persist-store';
export interface Account {
	id: string;
	company: string;
}
export interface User {
	__typename?: string;
	id: string;
	knownAs: string;
	fullName: string;
	email: string;
	confirmed: string;
	imageSrc: string;
	accountId: string;
	createdAt: string;
	updatedAt: string;
	account: Account;
}

export interface SignedInRequest {
	me: boolean;
}
export class UserStore {
	user: User | null = null;
	account: Account | null = null;
	error: ApolloError | any = null;
	loading = false;
	service: typeof UserService;

	constructor(userService: typeof UserService) {
		makeAutoObservable(this);
		makePersistable(this, {
			name: 'UserStore',
			properties: ['user', 'error', 'loading', 'service', 'account'],
			storage: typeof window !== 'undefined' ? localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});
		this.service = userService;
	}

	get isHydrated(): boolean {
		return isHydrated(this);
	}

	get isPersisting(): boolean {
		return isPersisting(this);
	}

	isLoading() {
		return this.loading;
	}

	isError() {
		return this.error;
	}

	async signedin(signedinRequest: SignedInRequest, query: any = {}) {
		const [userSession] = query;
		const { data, error, loading } = await userSession({
			variables: { ...signedinRequest },
		});

		if (loading) this.setLoading(loading);
		if (error) this.setError(error);
		if (data) {
			const { userSession } = data;
			if (userSession && userSession.user) this.setUser(userSession.user);
			this.setError({ message: 'Unauthorized', status: 401 });
		}

		return {
			loading,
			error,
			user: this.user,
		};
	}

	async getUser() {
		const data = await getPersistedStore(this);
		return data?.user;
	}

	async getAccount() {
		const data = await getPersistedStore(this);
		return data?.account;
	}

	async clearPersistedData(): Promise<void> {
		await clearPersistedStore(this);
	}

	private setError(error: ApolloError | any) {
		this.error = error;
	}

	private setLoading(loading: boolean) {
		this.loading = loading;
	}

	setUser(userData: User) {
		this.user = userData;
		this.account = userData.account;
	}
}
