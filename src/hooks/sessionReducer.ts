export interface Account {
	id: number;
	ownerId: string;
	company: string;
	createdAt: string;
	updatedAt: string;
	renew_on: Date;
}

export interface User {
	id: string;
	knownAs: string;
	fullName: string;
	email: string;
	imageSrc?: string;
	preferences?: string;
	accountId: string;
	confirmed: boolean;
	createdAt: string;
	account?: Account;
}

export interface Session {
	id: string | undefined;
	token: string | undefined;
	userId: string | undefined;
	user: User | undefined;
}

export interface LoginInput {
	email: string | undefined;
	password: string | undefined;
}

export interface LoggedInInput {
	me: boolean | undefined;
}

export interface RegisterInput {
	knownAs: string;
	fullName: string;
	email: string;
	company: string;
	password: string;
	password_confirmation: string;
}

export interface SessionState {
	loading: boolean | undefined;
	error: any | undefined;
	session: Session | undefined;
}

export interface UserState {
	loading: boolean | undefined;
	error: any | undefined;
	user: User | undefined;
}

export const initialSessionState: SessionState = {
	loading: false,
	error: undefined,
	session: undefined,
};

export const initialUserState: UserState = {
	loading: false,
	error: undefined,
	user: undefined,
};

export interface AuthAction {
	LOADING: string;
	ERROR: string;
	SUCCESS: string;
}

export const AUTH_ACTION: AuthAction = {
	LOADING: 'loading',
	ERROR: 'error',
	SUCCESS: 'success',
};

export interface LoginAction {
	type: string;
	payload: LoginInput;
}

export interface RegisterAction {
	type: string;
	payload: RegisterInput;
}

export interface LoggedInAction {
	type: string;
	payload: LoggedInInput;
}

export interface LogoutAction {
	type: string;
	payload: any;
}

export const useSessionsReducer = (
	state: SessionState | UserState,
	action: LoginAction | LogoutAction | LoggedInAction | RegisterAction,
): SessionState | UserState | undefined => {
	switch (action.type) {
		case AUTH_ACTION.LOADING:
			return { ...state, loading: action.payload, error: undefined };

		case AUTH_ACTION.ERROR:
			console.log('this is error', action.payload);
			return { ...state, loading: false, error: action.payload.message };
		case AUTH_ACTION.SUCCESS:
			if (Object.prototype.hasOwnProperty.call(action.payload, 'token'))
				return { ...state, loading: false, error: undefined, session: action.payload };
			if (Object.prototype.hasOwnProperty.call(action.payload, 'accountId'))
				return { ...state, loading: false, error: undefined, user: action.payload };
			break;
		default: {
			return state;
		}
	}
};
