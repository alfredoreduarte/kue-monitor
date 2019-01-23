const kue = require('kue')
const PORT = process.env.PORT || 5000

kue.createQueue({
	redis: {
		host: process.env.REDIS_DB_HOST,
		auth: process.env.REDIS_DB_PASSWORD,
		db: process.env.REDIS_DB_NUMBER,
	}
})

kue.app.listen(PORT)
console.log("Running on http://127.0.0.1:" + PORT)
