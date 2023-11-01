const getFBInfo = require("@xaviabot/fb-downloader");
const { response } = require("express");

const facebookResponse = async(req, res = response) => {
    const url = req.body.url;    
    const result = await getFBInfo(url)
    res.json({
        response: result
    });   
};

module.exports = {
    facebookResponse
}