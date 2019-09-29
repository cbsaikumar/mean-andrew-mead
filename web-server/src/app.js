import path from 'path'
import express from 'express'
import chalk from 'chalk'
import hbs from 'hbs'

const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Bhargava Sai'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Bhargava Sai'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Bhargava Sai',
        helpTxt: 'Some sample help text.'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather page!')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Bhargava Sai',
        errorMsg: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bhargava Sai',
        errorMsg: 'Route not found.'
    })
})
app.listen(port, ()=> console.log(chalk.bgGreen(`Server started on port ${port}`)))