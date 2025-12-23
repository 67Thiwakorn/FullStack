const furniture = ["Table", "Chair", "Couch"];

furniture.forEach((item) => {
    item.split("").forEach((char) => {
        console.log(char);
    });
});