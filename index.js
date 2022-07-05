function superbowlWin(record){
    let foundWin = record.find(isWin) // record.find(element => element.result === "W")
    if (foundWin === undefined){
    return undefined}
    else {return foundWin.year}
}
function isWin(element){
    return element.result === "W"
}

record.find(element => element.result === "W")