import { validateEmail } from '../../utils/helpers/validate_email.helper';
import { Credentials, validateCredentials } from '../../utils/helpers/validate_signinCreds.helper';

describe('Util helpers', () => {
	describe('validate email', () => {
		let emailString: string | undefined;

		beforeEach(() => {
			emailString = undefined;
		});

		it('returns false when email string is null or undefined', () => {
			const result = validateEmail(emailString);
			expect(result).toBe(false);
		});

		it('returns true when email string is invalid', () => {
			emailString = 'ziggy@';
			const result = validateEmail(emailString);
			expect(result).toBeFalsy();
		});

		it('returns true when email string is valid', () => {
			emailString = 'ziggy@example.com';
			const result = validateEmail(emailString);
			expect(result).toBeTruthy();
		});
	});

	describe('validate signin credentials', () => {
		const credentials: Credentials = {
			email: undefined,
			password: undefined,
		};

		afterEach(() => {
			credentials.email = undefined;
			credentials.password = undefined;
		});

		it('returns false when the credentials are invalid', () => {
			const result = validateCredentials({ ...credentials });
			expect(result).toBeFalsy();
		});

		it('returns true when the credentials are valid', () => {
			credentials.email = 'ziggy@example.com';
			credentials.password = 'password';
			const result = validateCredentials({ ...credentials });
			expect(result).toEqual(true);
		});
	});
});
