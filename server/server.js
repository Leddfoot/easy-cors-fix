const express = require('express')
const app = express()
const path = require('path')

const https = require("https");
const http = require('http') //use this if your api uses http and not https

const publicDirectoryPath = path.join(__dirname, '../public')
console.log('In order for this to work, your starting page must be named index.html and must be here:', publicDirectoryPath);

app.use(express.static(publicDirectoryPath))

app.get('/returnSomeJSON', (req, res) => {
    res.json([
        { productNumber: 16, description: 'paper towels', price: 4.50 },
        { productNumber: 35, description: 'milk', price: 3.99 },
    ])
})

app.get('/nodehttp', (req, res) => {
    // console.log('req.query: ', req.query);


    const options = {
        json: true,
        headers: {
            'Ocp-Apim-Subscription-Key': 'YOUR API KEY HERE'
        }
    };

    const handleData = d => {
        incomingData = d.toString()
        parsedData = JSON.parse(incomingData)
        res.send(parsedData)
    }    

    const fetchData = () => {
        https.get('https://apis.vinmonopolet.no/stores/v0/details?storeNameContains=holmen', options, (res) => {
            console.log(' response statusCode:', res.statusCode);
            // console.log('response headers:', res.headers);

            res.on('data', (d) => {
                // process.stdout.write(d); //use this if you need to log the response from the external api, note that it logs in the NODE terminal and not the browser console
                handleData(d)
            });

        }).on('error', (e) => {
            console.error(e);
        });
    }
    fetchData()

})



const port = 3000
app.listen(port, () => {
    console.log('Test server is running on port ' + port)
})
