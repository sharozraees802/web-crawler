const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 3000;

// http://localhost:3000/?website=https://something.com
app.get('/crawl', async (req, res, next)=>{
    if (!req.query.website) {
        const err = new Error('Required Query website is missing');
        err.status = 400;
        next(err);
    }
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(req.query.website);
        const html = await page.content();

        await page.close();

        // res.send(html);
        return res.status(200).send(html);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error / Something broke');
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`click me http://localhost:3000/crawl?website=http://quotes.toscrape.com/`);
})