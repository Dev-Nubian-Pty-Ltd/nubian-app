import { SessionsResolver } from '@root/api/graphql';
import { SessionsService } from '@root/api/services';
import { LoginRequestInput } from '@root/api/services/sessions/dto/sessions/sessions.dto';
import { makeAutoObservable } from 'mobx';
import { getPersistedStore, makePersistable } from 'mobx-persist-store';

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

interface Session {
	id: string;
	token: string;
	createdAt: string;
	userId: string;
	user: User;
}

export class SessionsDataStore {
	private authenticated = false;
	resolver: typeof SessionsResolver;
	session: Session | undefined = undefined;
	token: string | undefined = undefined;
	user: User | undefined = undefined;

	constructor(resolver: typeof SessionsResolver, private readonly sessionsService: typeof SessionsService) {
		makeAutoObservable(this);
		makePersistable(this, {
			name: 'SessionsStore',
			properties: ['token', 'user', 'session'],
			storage: typeof window !== 'undefined' ? window.localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});
		this.sessionsService = sessionsService;
		this.resolver = resolver;
		this.getToken().then((data) => {
			this.authenticated = data ? true : false;
		});
	}

	signIn = async (loginRequest: LoginRequestInput): Promise<Error | undefined | unknown> => {
		try {
			const resultPayload: any = await this.sessionsService.signIn(loginRequest);
			const {
				data: { createSession },
			} = resultPayload;
			await this.setAuthenticated(true);
			await this.setToken(createSession.token);
			await this.setUserData(createSession.user);
		} catch (error) {
			await this.setAuthenticated(false);
			return error;
		}
	};

	getToken = async () => {
		const data: typeof this | null = await getPersistedStore(this);
		return data?.token;
	};

	getUser = async () => {
		const data: typeof this | null = await getPersistedStore(this);
		return data?.user;
	};

	private setAuthenticated = async (authenticated: boolean) => {
		this.authenticated = authenticated;
	};

	private setToken = async (token: string) => {
		this.token = token;
	};

	private setUserData = async (user: User) => {
		this.user = user;
	};

	isAuthenticated() {
		return this.authenticated;
	}
}
