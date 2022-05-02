import winston from 'winston';
import 'winston-daily-rotate-file';

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
      filename: `${config.logLocation}/%DATE%.log`,
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
      filename: `${config.logLocation}/user-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
    }),
  ],
});

export { logger as log };
export { userLogger as ulog };
