async function getInParallel(apiCalls) {
    try {
        let results = await Promise.all(apiCalls.map(a => a()));
        return results
    } catch(err) {
        return err
    }
};

let promise = getInParallel([
    () => Promise.resolve("First API call!"),
    () => Promise.resolve("Second API call!")
]);

if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}

/**
 A company uses a Node.js application that checks several data sources for requested information. Since each request to a data source is performance heavy, the application should try to check the next source only if the request failed at the current data source. That functionality was extracted into the firstSuccessfulPromise function.
 The firstSuccessfulPromise function accepts an array of Promises as a promiseArray parameter. The function should return a Promise which should resolve to the first successful result from the promiseArray.

 If no Promise from the promiseArray returns successfully, the function should return undefined.

 For example, if the following code is executed:

 firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
              new Promise((resolve, reject) => resolve("Success!"))])
  .then(result => console.log(result));

 * @param {*} promiseArray 
 * @returns 
 */
async function firstSuccessfulPromise(promiseArray) {
    // Write your code here
    try{
      let results = await Promise.allSettled(promiseArray);
    
      let res = results.find(result => result.status === "fulfilled");

      if(res) return res.value;

      return res
    } catch(err) {
      return err;
    }
  }
  
  let promise = firstSuccessfulPromise([
      new Promise((resolve, reject) => reject()), 
      new Promise((resolve, reject) => reject()), 
      new Promise((resolve, reject) => resolve("Success!")),
    ]);

  promise.then(result => console.log(result));
