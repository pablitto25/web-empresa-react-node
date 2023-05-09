import OurteamModel from '../models/OurteamModel.js';


export const getAllOurteam = async(req,res) =>{
    try {
        const ourteam = await OurteamModel.findAll();
        res.json(ourteam);
    } catch (error) {
        res.json( {message: error.message});
    }
}

export const getAllByType = async(req,res) =>{
    try {
        const ourteam = await OurteamModel.findAll({where: { ourteam_type: req.params.type, ourteam_status: "active"}});
        res.json(ourteam);
    } catch (error) {
        res.json( {message: error.message});
    }
}

export const getAllByArea = async(req,res) =>{
    try {
        const ourteam = await OurteamModel.findAll({where: { ourteam_type: req.params.type, area: req.params.area, ourteam_status: "active"}});
        res.json(ourteam);
    } catch (error) {
        res.json( {message: error.message});
    }
}
