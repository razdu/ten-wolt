const fs = require("fs-extra");

function getNowTimeStamp() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    toString = () => `[ ${day}-${month + 1}-${year} > ${hours}:${minutes}:${seconds} ]`;
    return { year, month, day, hours, minutes, seconds, toString };
}
function writeJsonFile(fileName, data) {
    let filePath = `./${fileName}.json`;
    let file = [];
    try {
        file = fs.readJSONSync(filePath);
    } catch (error) {
        fs.writeJsonSync(filePath, file);
        file = fs.readJSONSync(filePath);
    }
    file.push(data);
    fs.writeJsonSync(filePath, file);
}
module.exports = { writeJsonFile, getNowTimeStamp };
