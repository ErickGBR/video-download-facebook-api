const getFBInfo = require("@xaviabot/fb-downloader");
const { response } = require("express");

const facebookResponse = async(req, res = response) => {
try {
    
    const url = req.body.url;    
    const result = await getFBInfo(url)
    res.json({
        status:true,
        response: result
    });   
} catch (error) {
    res.json({
        status:false,
        error: error
    })
}
};

module.exports = {
    facebookResponse
}