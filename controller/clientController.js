function nameFunction() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = false;
            if (condition) {
                resolve("data");
            } else {
                reject("error");
            }
        }, 5000);
    });
}
exports.nameFunction = nameFunction;
