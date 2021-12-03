// app.get("/fetch", async(req, res) => {
//     let url = "http://quotes.toscrape.com";
//     let pages = 1;
//     let hasNext = true;

//     let authors = [];
    
//     try{
//         await helpers();
//         res.send("success");
//     } catch (error){
//         console.log(error)
//         res.send(error)
//     }
// });
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

            quotes = JSON.parse(data).quotes;

            if(req.query.author){
                quotes = quotes.filter(d => d.author === req.query.author);
            } else if(req.query.tag) {
                quotes = quotes.filter(d => d.tags.includes(req.query.tag));
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

(async () => {
    let url = "http://quotes.toscrape.com";
    let pages = 1;
    let hasNext = true;

    let quotes = [];
    let authorUrls = [];
    let authors = [];
    
    let starttime = Date.now();
    starttime = starttime.getMilliseconds;

    try {
        while(hasNext){
            const response = await axios.get(url+`/page/${pages}`);
            console.log(`loaded ${url+`/page/${pages}`}`)
            const $ = cheerio.load(response.data);
            
            $(".quote").each(async(i, el) => {
                const text = $(el).find(".text").text().replace(/\s\s+/g,"").slice(0, 50);
                const author = $(el).find(".author").text().replace(/\s\s+/g,"");
                let tags = [];
                $(el).find(".tag").each((i, tagEl) => {
                const tag = $(tagEl).text().replace(/\s\s+/g,"");
                tags.push(tag);
                });

                const authorUrl = $(el).find(".author").siblings("a")[0].attribs.href;

                if(authorUrls.indexOf(authorUrl) === -1){
                    const authorResponse = await axios.get(url+authorUrl);
                    const $$ = cheerio.load(authorResponse.data);
                    console.log(`loaded ${url+authorUrl}`)

                    const name = $$(".author-title").text().replace(/\s\s+/g,"");
                    const birthdate = $$(".author-born-date").text().replace(/\s\s+/g,"");
                    const location = $$(".author-born-location").text().replace(/\s\s+/g,"");
                    const biography = $$(".author-description").text().replace(/\s\s+/g,"").slice(0, 50);
                    authors.push({name, biography, birthdate, location});

                    authorUrls.push(authorUrl);
                }
    
                quotes.push({
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
            quotes
        }), "utf8", function (err) {
            if (err) {
                return ("An error occured while writing JSON Object to File.");
            }
            
            return("JSON file has been saved.");
        });

        // for(let authorUrl in authorUrls){
        //     const authorResponse = await axios.get(url+authorUrls[authorUrl].authorUrl);
        //     const $$ = cheerio.load(authorResponse.data);
        //     console.log(`loaded ${url+authorUrls[authorUrl].author}`)

        //     const name = $$(".author-title").text().replace(/\s\s+/g,"");
        //     const birthdate = $$(".author-born-date").text().replace(/\s\s+/g,"");
        //     const location = $$(".author-born-location").text().replace(/\s\s+/g,"");
        //     const biography = $$(".author-description").text().replace(/\s\s+/g,"").slice(0, 50);

        //     authors.push({name, biography, birthdate, location});
        // }

        fs.writeFileSync("authors.json", JSON.stringify({
            data: authors
        }), "utf8", function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            
            console.log("JSON file has been saved.");
           
            let endtime = Date.now();
   
            console.log(endtime.getMilliseconds - starttime)
        });
    } catch (err) {
        console.log(err);
    }
})();
