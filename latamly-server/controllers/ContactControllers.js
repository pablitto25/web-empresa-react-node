import ContactModel from "../models/ContactModel.js";



//Crear un Registro
export const createContact = async (req,res) => {
    try {
        await ContactModel.create(req.body)
        res.json({
            "message" : "Contacto creado correactamente"
        })
    } catch (error) {
        res.json( {message: error.message});
    }
}