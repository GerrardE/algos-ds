// requests library
const axios = require("axios");

// your choice of HTML parser
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;
                
app.get("/authors", async(req, res) => {
    let url = "http://quotes.toscrape.com";
    let pages = 0;
    let hasNext = true;

    let pageHtml = [];

    let pageLinks = {};

    let authors = [];
    
    try{
        while(hasNext){
            const response = await axios.get(url+`/page/${pages}`);
            const $ = cheerio.load(response.data);
            
            console.log(`loaded ${url+`/page/${pages}`}`);
            
            pageHtml.push($);
            
            pages++;
            
            const nextPage = $(".next");
            
            if(!nextPage.find("a")[0]) {
                hasNext=!hasNext;
            } 
        }

        // for(let $ of pageHtml) {
        //     $(".quote").each((i, el) => {
        //         const title = $(el).find(".author").text().replace(/\s\s+/g,"");
        //         const author = $(el).find(".author").siblings("a")[0].attribs.href;
        //         console.log(title, author);
    
        //         pageLinks[title] = author; 
        //     })
        // }

        console.log(pageLinks)
        // fs.readFile('authors.json', async(err, data) => {
        //     if (err) {
        //         let authorUrls = {};
                
        //         for(let authorUrl in authorUrls){
        //             const authorResponse = await axios.get(url+authorUrls[authorUrl].author);
        //             const $$ = cheerio.load(authorResponse.data);
        //             console.log(`loaded ${url+authorUrls[authorUrl].author}`)

        //             const name = $$(".author-title").text().replace(/\s\s+/g,"");
        //             const birthdate = $$(".author-born-date").text().replace(/\s\s+/g,"");
        //             const location = $$(".author-born-location").text().replace(/\s\s+/g,"");
        //             const biography = $$(".author-description").text().replace(/\s\s+/g,"").slice(0, 50);

        //             authors.push({name, biography, birthdate, location});
        //         }

        //         fs.writeFileSync("authors.json", JSON.stringify({
        //             data: authors
        //         }), "utf8", function (err) {
        //             if (err) {
        //                 console.log("An error occured while writing JSON Object to File.");
        //                 return console.log(err);
        //             }
                    
        //             console.log("JSON file has been saved.");
        //         });

        //         if(req.query.name){
        //             authors = authors.filter(d => d.name === req.query.name);
        //         }
        //         const endtime = new Date()
        //         console.log(endtime.getMilliseconds() - starttime.getMilliseconds())
        //         return res.send({
        //             status: 200,
        //             data: authors
        //         })
        //     }

        //     authors = JSON.parse(data).data;

        //     if(req.query.name){
        //         authors = authors.filter(d => d.name === req.query.name);
        //     }

        //     return res.send({
        //         status: 200,
        //         data: authors
        //     })
        // })
        return res.send({
                    status: 200,
                    data: authors
                })
    } catch (error){
        console.log(error)
        res.send(error)
    }
});

app.listen(port, ()=>{
    console.log(`App is ready at PORT ${port}`)
})

module.exports = app; 
