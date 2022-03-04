const winston = require("winston");
require("winston-daily-rotate-file");
require('dotenv').config();

const logger = winston.createLogger({

    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    timestamp: true,
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
            filename: `${process.env.logLocation}/%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m'
        })
    ]
});

module.exports.log = logger