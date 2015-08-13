var config = {};

config.production = process.env.NODE_ENV === 'production';

config.databases = {};

config.databases.mongo = {};

// superbowl-dev-mongolabs
config.databases.mongo.primary = "mongodb://uvas:Test1234@@ds031883.mongolab.com:31883/uvas-db1"

if(!config.production) {
    config.databases.mongo.primary = "mongodb://localhost:27017/uvas-db1";
}

module.exports = config;