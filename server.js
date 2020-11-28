const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const shortId = require('shortid')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: false  }))

app.post('/shortUrls',async  (req, res)=>{
    // await ShortUrl.create({ full:req.body.fullUrl })
    let shortUrl = await ShortUrl.create({ full:req.body.fullUrl })
    console.log(shortUrl)
    return res.json(shortUrl)
})
app.get('/:shortUrl',async (req, res) => {
    let short = req.params.shortUrl
    console.log(shortId.isValid(short))
    if(!shortId.isValid(short)){
        return res.sendStatus(404)
    }
    let shortUrl = await ShortUrl.findOne({ short })
    console.log(shortUrl)
    if(shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()
    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000)

