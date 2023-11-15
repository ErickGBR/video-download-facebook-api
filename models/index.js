const getFBInfo = require("@xaviabot/fb-downloader");
const { response } = require("express");

const facebookResponse = async(req, res = response) => {
try {
    
    const url = req.body.url;    
    const result = await getFBInfo(url)
    res.status(200).json({
        status:true,
        response: result
    });   
} catch (error) {
    res.status(500).json({
        status:false,
        error: error
    })
}
};

module.exports = {
    facebookResponse
}