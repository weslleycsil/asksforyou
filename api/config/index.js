module.exports = {
    env: process.env.NODE_ENV || 'development',
	database: {
		uri: `mongodb://database:27017/asksforyou`
	},
	auth: {
		user: process.env.userName || 'admin',
		password: process.env.passUser || 'admin'
	}
};