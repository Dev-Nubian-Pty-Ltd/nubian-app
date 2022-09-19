const regex = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const validateEmail = (email: string | undefined): boolean => {
	if (email === undefined || email === '') return false;
	if (email.trim().length === 0 || email.trim().length === 1) return false;
	return regex.test(email);
};
