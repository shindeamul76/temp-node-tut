const {readFile, writeFile} = require("fs");

readFile("./Content/Subfolder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile("./Content/Subfolder/result-sync.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile(
            "./Content/Subfolder/result-async.txt", 
            `Hello Iam the result os async file
            `, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result)
            } )
    })
})