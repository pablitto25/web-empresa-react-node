import ContentModel from '../models/ContentModel.js';


export const getNavbarByLanguage = async(req,res) => {
    try {
        const brands = await ContentModel.findAll({ where: {cont_name:'navbar', cont_languaje:req.params.lang,  cont_type: 'lang'}});
        if(Object.keys(brands).length === 0){
            
            res.json({"message" : "No brands found"});
        } else {
            res.json(brands[0]);
        }
    } catch (error) {
        res.json({message: error.message});
    }
}