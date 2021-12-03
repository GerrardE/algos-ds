const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream  = fs.createWriteStream('scrapped.csv');

writeStream.write(`Title, Description \n`);

request("https://codequilibrium.com", (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        
        $(".grid-item").each((i, el) => {
            const title = $(el).find("h2").text().replace(/\s\s+/g,"");
            const description = $(el).find("p").text().replace(/\s\s+/g,"");

            writeStream.write(`${title}, ${description} \n`);
        })

        console.log("scrapping done");
    }
})

app.get("/authors", async(req, res) => {
    let url = "http://quotes.toscrape.com";
    let pages = 1;
    let hasNext = true;

    let authors = [];

    const starttime = new Date()
    
    try{
        fs.readFile('authors.json', async(err, data) => {
            if (err) {
                let authorUrls = {};

                while(hasNext){
                    const response = await axios.get(url+`/page/${pages}`);
                    const $ = cheerio.load(response.data);
                    console.log(`loaded ${url+`/page/${pages}`}`)
                
                    $(".quote").each(async (i, el) => {
                        const title = $(el).find(".author").text().replace(/\s\s+/g,"");
                        const author = $(el).find(".author").siblings("a")[0].attribs.href;
                        authorUrls[title] = {title, author};
                    })

                    pages++;
                            
                    const nextPage = $(".next");

                    if(!nextPage.find("a")[0]) {
                        hasNext=!hasNext;
                    } 
                }

                for(let authorUrl in authorUrls){
                    const authorResponse = await axios.get(url+authorUrls[authorUrl].author);
                    const $$ = cheerio.load(authorResponse.data);
                    console.log(`loaded ${url+authorUrls[authorUrl].author}`)

                    const name = $$(".author-title").text().replace(/\s\s+/g,"");
                    const birthdate = $$(".author-born-date").text().replace(/\s\s+/g,"");
                    const location = $$(".author-born-location").text().replace(/\s\s+/g,"");
                    const biography = $$(".author-description").text().replace(/\s\s+/g,"").slice(0, 50);

                    authors.push({name, biography, birthdate, location});
                }

                fs.writeFileSync("authors.json", JSON.stringify({
                    data: authors
                }), "utf8", function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    
                    console.log("JSON file has been saved.");
                });

                if(req.query.name){
                    authors = authors.filter(d => d.name === req.query.name);
                }
                const endtime = new Date()
                console.log(endtime.getMilliseconds() - starttime.getMilliseconds())
                return res.send({
                    status: 200,
                    data: authors
                })
            }

            authors = JSON.parse(data).data;

            if(req.query.name){
                authors = authors.filter(d => d.name === req.query.name);
            }
            const endtime = new Date()
            console.log(endtime.getMilliseconds() - starttime.getMilliseconds())
            return res.send({
                status: 200,
                data: authors
            })
        })
    } catch (error){
        console.log(error)
        res.send(error)
    }
})

app.get("/quotes", async(req, res) => {
    let url = "http://quotes.toscrape.com";
    let pages = 1;
    let hasNext = true;

    let quotes;
    
    try{
        fs.readFile('quotes.json', async(err, data) => {
            if (err) {
                let dataArray = [];
                let authorUrls = {};

                while(hasNext){
                    const response = await axios.get(url+`/page/${pages}`);
                    console.log(`loaded ${url+`/page/${pages}`}`)
                    const $ = cheerio.load(response.data);
                    
                    $(".quote").each((i, el) => {
                        const text = $(el).find(".text").text().replace(/\s\s+/g,"").slice(0, 50);
                        const author = $(el).find(".author").text().replace(/\s\s+/g,"");
                        const authorUrl = $(el).find(".author").siblings("a")[0].attribs.href;
                        authorUrls[author] = {author, authorUrl};

                        let tags = [];
                        $(el).find(".tag").each((i, tagEl) => {
                        const tag = $(tagEl).text().replace(/\s\s+/g,"");
                        tags.push(tag);
                        });
        
                        dataArray.push({
                            text, author, tags
                        })
                    })

                    pages++;
                    
                    const nextPage = $(".next");
        
                    if(!nextPage.find("a")[0]) {
                        hasNext=!hasNext;
                    } 
                }

                fs.writeFileSync("quotes.json", JSON.stringify({
                    dataArray
                }), "utf8", function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    
                    console.log("JSON file has been saved.");
                });

                fs.writeFileSync("authorUrls.json", JSON.stringify({
                    data: authorUrls
                }), "utf8", function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    
                    console.log("JSON file has been saved.");
                });

                if(req.query.author){
                    quotes = dataArray.filter(d => d.author === req.query.author);
                } else if(req.query.tag) {
                    quotes = dataArray.filter(d => d.tags.includes(req.query.tag));
                } else {
                    quotes = dataArray;
                }

                return res.send({
                    status: 200,
                    data: quotes
                })
            };

            quotes = JSON.parse(data);

            if(req.query.author){
                quotes = quotes.dataArray.filter(d => d.author === req.query.author);
            } else if(req.query.tag) {
                quotes = quotes.dataArray.filter(d => d.tags.includes(req.query.tag));
            } else {
                quotes = quotes.dataArray;
            }

            return res.send({
                status: 200,
                data: quotes
            })
        });
    } catch (error){
        console.log(error)
        res.send(error)
    }
})
