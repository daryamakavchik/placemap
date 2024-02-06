import { config } from '@keystone-6/core';
import { Photo, Place } from './lists';
import dotenv from 'dotenv';

dotenv.config();

const {
    S3_BUCKET_NAME: s3BucketName = '',
    S3_REGION: s3Region = '',
    S3_ACCESS_KEY_ID: s3AccessKeyId = '',
    S3_SECRET_ACCESS_KEY: s3SecretAccessKey = '',
  } = process.env;

const {
    MYSQL_HOST: mysqlHost = '',
    MYSQL_PORT: mysqlPort = '',
    MYSQL_USER: mysqlUser = '',
    MYSQL_PASSWORD: mysqlPassword = '',
    MYSQL_DATABASE: defaultdb = '',
    MYSQL_URL: mysqlUrl = 'mysql://root:rootpass@localhost:3306/placemap',
} = process.env;

export default config({
    db: {
        useMigrations: true,
        provider: 'mysql',
        idField: { kind: 'uuid' },
        url: mysqlUrl,
    },
    storage: {
        s3: {
            kind: 's3',
            type: 'image',
            bucketName: s3BucketName,
            region: s3Region,
            accessKeyId: s3AccessKeyId,
            secretAccessKey: s3SecretAccessKey,
            signed: { expiry: 5000 },
        }
    },
    lists: {
        Place,
        Photo
    }
});
