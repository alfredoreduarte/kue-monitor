const kue = require('kue')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const PORT = process.env.PORT || 5000

const app = express()

kue.createQueue({
	redis: {
		host: process.env.REDIS_DB_HOST,
		auth: process.env.REDIS_DB_PASSWORD,
		db: process.env.REDIS_DB_NUMBER,
	}
})
app.use(basicAuth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD))
app.use(kue.app)
app.listen(PORT)
console.log("Running on http://127.0.0.1:" + PORT)
