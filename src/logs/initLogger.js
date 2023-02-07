const winston = require("winston");
const { combine, timestamp, printf, colorize, splat, simple } = winston.format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});
const initLogger = () => {
  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    format: combine(
      splat(),
      simple(),
      colorize(),
      timestamp(Date.now()),
      myFormat
    ),
    transports: [new winston.transports.Console()],
  });
};

module.exports = initLogger;
