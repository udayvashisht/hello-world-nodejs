var config = {};

config.production = process.env.NODE_ENV === 'production';

config.databases = {};

config.databases.mongo = {};

// superbowl-dev-mongolabs
config.databases.mongo.primary = "mongodb://IbmCloud_fgagpjf3_frcrfpvj_1jh3oral:mp83sQr5f6vXjRV77C2S8FeFEqJnu8SO@ds055210.mongolab.com:55210/IbmCloud_fgagpjf3_frcrfpvj"

if(!config.production) {
    config.databases.mongo.primary = "mongodb://localhost:27017/superbowl";
}

module.exports = config;