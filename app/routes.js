var Nerd = require('./models/nerd')

module.exports = (app) => {
	app.get('/api/nerds', (req,res) => {
		Nerd.find((err,nerds) => {
			if (err)
                res.send(err)

			res.json(nerds)
		})
	})

	app.get('*', (req,res) => {
		res.sendFile('./public/views/index.html')
	})
}
