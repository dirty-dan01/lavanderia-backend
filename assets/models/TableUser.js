module.exports.tableUsers = (elem) => {
    let row = document.createElement("div")
    row.className = "row"
    
    let div = document.createElement("div")
        div.className = "col"
        div.appendChild(elem)
        row.appendChild(div)

    return row
}