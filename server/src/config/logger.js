import * as winston from 'winston';
import 'winston-daily-rotate-file';
import {} from 'dotenv/config';

const config = process.env;

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json()
  ),
  timestamp: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: `${config.LOG_LOCATION}/%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
    }),
  ],
});

const userLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json()
  ),
  timestamp: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: `${config.LOG_LOCATION}/user-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
    }),
  ],
});

export { logger as log, userLogger as ulog };
