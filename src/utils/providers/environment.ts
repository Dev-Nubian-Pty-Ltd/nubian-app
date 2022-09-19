const isDevEnvironment = () => {
	return process.env.NODE_ENV == 'development';
};

const isProdEnvironment = () => {
	return process.env.NODE_ENV == 'production';
};

const getEnvironment = () => {
	return process.env.NODE_ENV;
};

export default { isDevEnvironment, isProdEnvironment, getEnvironment };
