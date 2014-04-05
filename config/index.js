var config = {
    local: {
        mode: 'local',
        port: process.env.PORT || 3000,
        mongodb: {
        	port: 27017,
        	host: 'localhost',
        	db: 'carapp'
        }
    },
    staging: {
        mode: 'staging',
        port: process.env.PORT || 4000,
        mongodb: {
        	port: 27017,
        	host: 'localhost',
        	db: 'carapp'
        }
    },
    production: {
        mode: 'production',
        port: process.env.PORT || 5000,
        mongodb: {
        	port: 27017,
        	host: 'localhost',
        	db: 'carapp'
        }
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}
