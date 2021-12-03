const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

module.exports = async () => {
    let url = "http://quotes.toscrape.com";
    let pages = 1;
    let hasNext = true;
    
    let quotes = [];
    let authors = [];
    
    try {
        let authorUrls = [];
        while(hasNext){
            const response = await axios.get(url+`/page/${pages}`);
            console.log(`loaded ${url+`/page/${pages}`}`)
            const $ = cheerio.load(response.data);

            $(".quote").each(async(i, el) => {
                const authorUrl = $(el).find(".author").siblings("a")[0].attribs.href;
                const authorResponse = await axios.get(url+authorUrl);
                const $$ = cheerio.load(authorResponse.data);
    
                const name = $$(".author-title").text().replace(/\s\s+/g,"");
                const birthdate = $$(".author-born-date").text().replace(/\s\s+/g,"");
                const location = $$(".author-born-location").text().replace(/\s\s+/g,"");
                const biography = $$(".author-description").text().replace(/\s\s+/g,"").slice(0, 50);
                if(authorUrls.indexOf(authorUrl) === -1) {
                    authorUrls.push(authorUrl)
                    authors.push({name, biography, birthdate, location});
                }

                const text = $(el).find(".text").text().replace(/\s\s+/g,"").slice(0, 50);
                const author = $(el).find(".author").text().replace(/\s\s+/g,"");
                let tags = [];
                $(el).find(".tag").each((i, tagEl) => {
                    tags.push($(tagEl).text().replace(/\s\s+/g,""));
                });

                quotes.push({
                    text, author, tags
                })

                
            });

            pages++;
            
            const nextPage = $(".next");
            
            if(!nextPage.find("a")[0]) {
                hasNext=!hasNext;
            } 
        }

        const stream  = fs.createWriteStream('authors.json');
        stream.write(JSON.stringify({
            authors
        }));

        const writeStream  = fs.createWriteStream('quotes.json');
        
        writeStream.write(JSON.stringify({
            quotes
        }));

        return {quotes, authors};
    } catch (err) {
        console.log(err);
    }
};
