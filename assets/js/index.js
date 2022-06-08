function onLoad() {
    getUsers()
}

function getUsers() {
    fetch("http://localhost:3000/api/usuarios", {
        method: "GET",
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => {
        console.log(response.body)
        response.json()
    })
    .then(response => {
        let container = document.firstElementChild("container")
        console.log(response)
        response.map(elem => {
            container.appendChild(tableUsers(elem))
        })
    })
    .catch(exception => console.log(exception))
}

function tableUsers(elem) {
    let row = document.createElement("div")
    row.className = "row"
    
    console.log(elem)

    let div = document.createElement("div")
        div.className = "col"
        div.appendChild(elem)
        row.appendChild(div)

    return row
}

document.addEventListener("DOMContentLoaded", onLoad())