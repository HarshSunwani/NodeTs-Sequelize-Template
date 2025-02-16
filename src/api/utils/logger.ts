import { getLogger, configure } from 'log4js';
import CustomError from '../types/customErrorType';
const logger = getLogger();

configure({
  appenders: {
    console: { type: 'console' },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'all',
    },
  },
});

const errorLogger = (error: CustomError, functionName: string) => {
  let additionalMessageString =
    error.sql !== undefined ? `\n SQlQuery:${error.sql}` : '';

  additionalMessageString +=
    error.number !== undefined ? `\n Number:${error.number}` : '';

  additionalMessageString +=
    error.parent !== undefined ? `\n ${error.parent}` : '';

  additionalMessageString +=
    error.original !== undefined ? `\n ${error.original}` : '';

  logger.error(
    `Function Name: ${functionName} ${additionalMessageString}  \n MoreDetails:${JSON.stringify(
      error
    )} `
  );
};

const warnLogger = (warnMessage: string, functionName: string) => {
  logger.warn(`Function Name: ${functionName} \n Message: ${warnMessage}`);
};

const infoLogger = (infoMessage: string, functionName: string) => {
  logger.info(`Function Name: ${functionName} \n Message: ${infoMessage}`);
};

export default { errorLogger, infoLogger, warnLogger };
