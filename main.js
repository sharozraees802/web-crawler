const express = require('express');

const app = express();
const port = 3000;

// ?website=https://something.com
app.get('/crawl',(req, res, next)=>{
    if (!req.query.website) {
        const err = new Error('Required Query website is missing');
        err.status = 400;
        next(err);
    }
    try{

    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error / Something broke');
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})