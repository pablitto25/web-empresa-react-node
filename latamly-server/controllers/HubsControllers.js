import ContentModel from '../models/ContentModel.js';


export const getAllHubs = async(req,res) => {
    try {
        const hubs = await ContentModel.findAll({ where: {cont_name: 'hubs', cont_status: 'published'}});

        if(Object.keys(hubs).length === 0){
            
            res.json({"message" : "No brands found"});
        } else {
            res.json(hubs[0]);
        }
        
    } catch (error) {
        res.json({message: error.message});
    }
}

