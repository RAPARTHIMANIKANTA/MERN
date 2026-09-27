const order = new Promise((resolve, reject) => {
    let foodReady = true;
    if (foodReady) {
        resolve("Food delivered");
    } else {
        reject("Food unavailable");
    }
});

order
    .then(result => console.log(result))
    .catch(error => console.log(error));