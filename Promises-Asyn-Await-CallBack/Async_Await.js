let getDetail = (title) => {
    let movie = [
        { title: "Fawad", film: "Group 1" },
        { title: "Danish", film: "Group 2" },
        { title: "Ali", film: "Group 3" }
    ];
    return new Promise((res, rej) => {
        let val = movie.find(x => x.title.toLowerCase() == title.toLowerCase());
            if (val) {
                res(val);
               
            }
            else {
                rej("This Name Not Find In Our List...!");
                console.log("error here list")
            }
    });
}

let Find_Name=async(res, title)=> {
    try {
        let valStore = await getDetail(title);
        res.send(valStore);
    } catch (err) {
        res.send(err);
    }
}

module.exports={Find_Name}