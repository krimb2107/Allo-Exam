const redisClient = require("./config/redis");
exports.saveCallId = (key, value) => {
    return new Promise((resolve, reject) => {
        redisClient.SET(Key, JSON.stringify(value), "EX", 86400, (err, res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        });
    });
};

exports.getCallId = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.GET(Key, (err, res) => {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
};