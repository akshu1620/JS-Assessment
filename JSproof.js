const nft = [];

function mintNFT(studentname,Courseopted, studentID,) {
    const i = {
    studentname: studentname,
    Courseopted: Courseopted,
    studentID: studentID
        
    };
    nft.push(i);
}
function listNFTs() {
     for(let i=0;i<nft.length;i++){
        console.log("studentname: " + nft[i].studentname);
        console.log("Courseopted: " + nft[i].Courseopted);
        console.log("studentID: " + nft[i].studentID);
        console.log("___ASSESSMENT___");

    };
}

function getTotalSupply() {
    return nft.length;
}

mintNFT("Vikas", "Python", 1204);
mintNFT("Shaurya", "C++", 1784);
mintNFT("Aryan", "Java", 1465);
listNFTs();

console.log("Total Supply: " + getTotalSupply());
