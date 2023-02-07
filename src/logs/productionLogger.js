const winston = require("winston");
const { combine, timestamp, printf, colorize } = winston.format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});
const prodctionLogger = () => {
  return winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    defaultMeta: { service: "production-logger" },
    format: combine(colorize("bold red cyanBG"), timestamp(), myFormat),
    transports: [
      new winston.transports.File({
        dirname: "logs",
        filename: "error.log",
        level: "error",
      }),
      new winston.transports.File({
        dirname: "logs",
        filename: "combined.log",
      }),
    ],
  });
};

module.exports = prodctionLogger;
