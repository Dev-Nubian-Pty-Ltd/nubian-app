import { SessionsResolver } from '@api/graphql';
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
export class UserStore {
	user: User | null = null;
	account: Account | null = null;
	error: ApolloError | any = null;
	loading = false;
	resolver: typeof SessionsResolver;

	constructor(sessionResolver: typeof SessionsResolver) {
		makeAutoObservable(this);
		makePersistable(this, {
			name: 'UserStore',
			properties: ['user', 'error', 'loading', 'resolver', 'account'],
			storage: typeof window !== 'undefined' ? localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});
		this.resolver = sessionResolver;
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
