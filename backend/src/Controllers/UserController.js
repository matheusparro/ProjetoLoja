const Usuario = require("../models/Usuario");

module.exports = {
    async criarUsuario(req,res){
        const{nome,senha} = req.body;
        const usuarioCriado = await Usuario.create({nome,senha});
        return res.json(usuarioCriado)
    },
    async retornaTodosUsuario(req,res){
        const usuarios = await Usuario.findAll(); 
        return res.json(usuarios)
    },
    async retornaUsuario(req,res){
        console.log(req)
        const id = req.params.id
    
        const usuarioUnico = await Usuario.findByPk(id)
        return res.json(usuarioUnico)
    }


}