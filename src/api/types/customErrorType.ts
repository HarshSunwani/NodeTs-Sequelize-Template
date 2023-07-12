type CustomError = {
  name: string;
  message: string;
  stack: string;
  number: number;
  sql: string;
  parent: string;
  original: string;
  kind: string;
};

export default CustomError;
