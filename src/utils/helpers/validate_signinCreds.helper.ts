interface Credentials {
	email: string | undefined;
	password: string | undefined;
}
export const validateCredentials = ({ email, password }: Credentials): boolean => {
	if (email === undefined || password === undefined) return false;
	if (email.trim().length === 0 || email.trim().length === 1) return false;
	if (password.trim().length === 0 || password.trim().length === 1) return false;
	if (email === '' || password === '') return false;
	if (email === ' ' || password === ' ') return false;
	return true;
};
