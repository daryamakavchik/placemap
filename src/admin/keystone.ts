import { config } from '@keystone-6/core';
import { Photo, Place } from './lists';

export default config({
    db: {
        useMigrations: true,
        provider: 'mysql',
        idField: { kind: 'uuid' },
        url: 'mysql://doadmin:AVNS_GX8DqRvHB60k7XxNqug@private-db-mysql-sfo2-14479-do-user-3665123-0.b.db.ondigitalocean.com:25060/placemap?ssl-mode=REQUIRED',
    },
    storage: {
        s3: {
            kind: 's3',
            type: 'image',
            bucketName: 'placemap',
            region: 'us-west-1',
            accessKeyId: 'AKIAX4HEJQFNDHSX7SQA',
            secretAccessKey: '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',
            signed: { expiry: 5000 },
        }
    },
    lists: {
        Place,
        Photo
    }
});
