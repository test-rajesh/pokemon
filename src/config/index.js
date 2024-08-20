const config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
  MYSQL_PORT: process.env.MYSQL_PORT,
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export { config };
