const express = require('express');
// const sql = require('mysql2');

const dbConfig = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'WaisDatabase'
};
const cors = require('cors');

class MainBackend
{
	constructor()
	{
		this.app = express();
		this.port = process.env.PORT || 5000;

		this.initializeMiddlewares();
		this.initializeRoutes();
		this.initializeSQL();

		this.start();
		this.setupCloseHandler();
	}

	initializeSQL()
	{
		// this.connection = sql.createConnection(dbConfig);
		// this.connection.connect((error) => {
		// 	if (error)
		// 	{
		// 		console.error('Error connecting to MySQL database:', error);
		// 		return;
		// 	}
		// 	console.log('Connected to MySQL database');
		// });
	}

	initializeMiddlewares()
	{
		this.app.use(cors({
			origin: 'http://localhost:3000',
			credentials: true,
			optionSuccessStatus: 200
		}));
		this.app.use(express.json());
	}

	initializeRoutes()
	{
		this.app.get('/api', (req, res) => {
			res.json("JD");
		});
	}


	start()
	{
		this.app.listen(this.port, () =>
		{
			console.log(`Server is running on http://localhost:${this.port}`);
		});
	}

	setupCloseHandler()
	{
		// process.on('SIGINT', () =>
		// {
		// 	this.connection.end();
		// 	console.log('MySQL connection closed');
		// 	process.exit();
		// });
	}
}

function main()
{
	const mainBackend = new MainBackend();
}

main();
