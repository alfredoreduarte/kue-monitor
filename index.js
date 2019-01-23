
const kue = require('kue')
const PORT = process.env.PORT || 5000
// var argv = require('yargs')
// 	.usage('Usage: $0 [options]')
// 	.example('$0 -p 3050 -r redis://10.0.0.4:6379 -q q')
// 	.describe('r', 'Redis url')
// 	.describe('p', 'Dashboard port')
// 	.describe('q', 'Prefix to use')
// 	.default('p', 3000)
// 	.default('r', 'redis://127.0.0.1:6379')
// 	.default('q', 'q')
// 	.help('h')
//     .alias('h', 'help')
//     .argv
// ;

kue.createQueue({
	redis: {
		host: process.env.REDIS_DB_HOST,
		auth: process.env.REDIS_DB_PASSWORD,
		db: process.env.REDIS_DB_NUMBER,
		1: process.env.REDIS_PREFIX,
	}
	// prefix: argv.q
});


kue.app.listen(PORT);
console.log("Running on http://127.0.0.1:" + PORT);
