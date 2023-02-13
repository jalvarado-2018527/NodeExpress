const Usuario = require('../models/usuario')
const Role = require('../models/role')
const { findById } = require('../models/usuario')

// Validamos si  el correo ya existe
const emailExiste = async(correo = '') =>{
    // verificar si el correo existe
    const existeEmailDeUsuario = await Usuario.findOne({correo})
    if (existeEmailDeUsuario ) {
        throw new Error(`el correo ${correo}, ya existe`)
    }
        
}

const esRoleValido =async(rol = '') =>{

    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(`el rol ${rol}, no existe en la db`)
    }
}

const idExiste = async(id)=>{
    const existIdOfUser = await Usuario.findById(id)
    if (!existIdOfUser) {
        throw new Error(`el id ${id}, no existe en la db`)  
    }
}

module.exports ={
    emailExiste,
    esRoleValido,
    idExiste
}