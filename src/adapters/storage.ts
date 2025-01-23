import { s3Storage } from '@payloadcms/storage-s3'

export const storageAdapter = s3Storage({
  collections: {
    media: true,
  },
  bucket: process.env.AWS_S3_BUCKET_NAME!,
  config: {
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_S3_SECRET_KEY!,
    },
    region: process.env.AWS_S3_REGION!,
    endpoint: process.env.AWS_S3_ENDPOINT!,
    // ... Other S3 configuration
  },
})
