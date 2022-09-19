export interface IformType {
	SIGN_IN: string;
	SIGN_UP: string;
	CHANNEL: string;
}

export const formType: IformType = {
	SIGN_IN: 'SIGN_IN',
	SIGN_UP: 'SIGN_UP',
	CHANNEL: 'CHANNEL',
};

export interface FormDataSet {
	name: string | any;
	labelName?: string | any;
	type: string | any;
	required: boolean;
	value: string | null;
	autoFocus?: boolean;
	hidden?: boolean;
	placeHolder?: string;
}
export const formStructure: Map<string, FormDataSet[]> = new Map();

formStructure.set('SIGN_UP', [
	{
		name: 'fullName',
		type: 'text',
		required: true,
		value: null,
		placeHolder: 'your full name',
	},
	{ name: 'knownAs', type: 'text', required: true, value: null, placeHolder: 'known as' },
	{ name: 'company', type: 'text', required: true, value: null, placeHolder: 'company name' },
	{ name: 'email', type: 'email', required: true, value: null, placeHolder: 'email' },
	{ name: 'password', type: 'password', required: true, value: null, placeHolder: 'password' },
	{
		name: 'password_confirmation',
		type: 'password',
		required: true,
		value: null,
		placeHolder: 'password confirmation',
	},
]);

formStructure.set('SIGN_IN', [
	{
		name: 'email',
		type: 'email',
		required: true,
		value: null,
		autoFocus: true,
		placeHolder: 'your email',
	},
	{ name: 'password', type: 'password', required: true, value: null, placeHolder: 'your password' },
]);

formStructure.set('CHANNEL', [
	{ name: 'title', type: 'text', required: true, value: null },
	{
		name: 'imageSrc',
		labelName: 'avatar',
		type: 'file',
		required: false,
		value: null,
	},
]);

export const getFormStructure = (formString: string) => {
	if (!formString) return undefined;
	if (formString == 'login') return formStructure.get(formType.SIGN_IN);
	if (formString == 'register') return formStructure.get(formType.SIGN_UP);
	if (formString == 'channel') {
		return formStructure.get(formType.CHANNEL);
	} else {
		return undefined;
	}
};
