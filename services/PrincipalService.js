let mysql = require('mysql')
let config = require('../config/config')
let conection = mysql.createPool(config)

// CREATE 
module.exports.createCliente = (req, res) => {
    let userData = req.body
    let clienteDirecion = userData["clienteDirecion"]
    let query = `INSERT INTO direciones (colonia, codigoPostal, municipio) VALUES(${clienteDirecion["colonia"]}, ${clienteDirecion["codigoPostal"]}, ${clienteDirecion["municipio"]})`
    
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            let queryUser = `INSERT INTO cliente (nombreCliente, clienteDirecionId) VALUES(${userData["clienteNombre"]}, ${result.insertId})`
            conection.query(queryUser, (err, res, field) => {
                if(err) {
                    res.send(error)
                } else {
                    res.send(res)
                }
            })
        }
    })
}

module.exports.createUser = (req, res) => {
    let userData = req.body
    let query = `INSERT INTO usuario (usuarioId, nombreUsuario, correoUsuario, contraseniaUsuario, fechaDeNacimiento, celular, privilegioId) VALUES(${userData["usuarioId"]}, '${userData["nombreUsuario"]}', '${userData["usuarioCorreo"]}', '${userData["passwordUsuario"]}', '${userData["fechaNacimiento"]}', ${userData["celular"]}, ${userData["privilegioId"]})`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.createPrenda = (req, res) => {
    let prendaData = req.body
    let query = `INSERT INTO prenda (tipoPrenda, celular, precio) VALUES(${prendaData["tipoPrenda"]}, ${prendaData["celular"]}, ${prendaData["precio"]})`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

// GET
module.exports.getCliente = (req, res) => {
    let idCliente = req.params.id
    let query = `SELECT * FROM cliente WHERE clienteId = ${idCliente}`
    
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.getUsuario = (req, res) => {
    let idCliente = req.params.id
    let query = `SELECT * FROM usuario WHERE usuarioId = ${idCliente}`
    
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.getUsuarios = (req, res) => {
    let query = `SELECT * FROM usuario`

    conection.query(query, (error, result, fields) => {
        if(error)
            res.send(error)
        else{
            res.send(result)
        }
    })
}

module.exports.getPrenda = (req, res) => {
    let idCliente = req.params.id
    let query = `SELECT * FROM prenda WHERE prendaId = ${idCliente}`
    
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

// UPDATE
module.exports.updateCliente = (req, res) => {
    let userData = req.body.cliente;
    let clienteDirecion = userData["clienteDirecion"]
    let query = `UPDATE direciones SET colonia = ${clienteDirecion["colonia"]}, codigoPostal = ${clienteDirecion["codigoPostal"]}, municipio = ${clienteDirecion["municipio"]}) WHERE direcionId = ${clienteDirecion["direcionId"]}`
    
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            let queryUser = `UPDATE cliente SET clienteNombre = ${userData["clienteNombre"]} WHERE clienteId = ${userData["clienteId"]}`
            conection.query(queryUser, (err, res, field) => {
                if(err) {
                    res.send(error)
                } else {
                    res.send(res)
                }
            })
        }
    })
}

module.exports.updateUsuario = (req, res) => {
    let userData = req.body.user
    let query = `UPDATE user SET nombreUsuario = ${userData["nombreUsuario"]}, usuarioCorreo = ${userData["usuarioCorreo"]}, passwordUsuario = ${userData["passwordUsuario"]}, fechaNacimiento = ${userData["fechaNacimiento"]}, celular = ${userData["celular"]}, privilegioId = ${userData["privilegioId"]} WHERE usuarioId = ${userData["usuarioId"]}`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.updatePrenda = (req, res) => {
    let userPrenda = req.body.prenda
    let query = `UPDATE prenda SET tipoPrenda = ${userPrenda["tipoPrenda"]}, celular = ${userPrenda["celular"]}, precio = ${userPrenda["precio"]} WHERE prendaId = ${userPrenda["prendaId"]}`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

// DELETE
module.exports.deleteCliente = (req, res) => {
    let id = req.params.id
    let query = `DELETE FROM cliente WHERE clienteId = ${id}`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.deleteUsuario = (req, res) => {
    let id = req.params.id
    let query = `DELETE FROM usuario WHERE usuarioId = ${id}`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}

module.exports.deletePrenda = (req, res) => {
    let id = req.params.id
    let query = `DELETE FROM cliente WHERE prendaId = ${id}`
    conection.query(query, (error, result, fields) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
}