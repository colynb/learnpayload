import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export const emailAdapter = nodemailerAdapter({
  defaultFromAddress: 'info@openhours.app',
  defaultFromName: 'Learn Payload',
  // Nodemailer transportOptions
  transportOptions: {
    host: process.env.MAIL_HOST!,
    port: Number(process.env.MAIL_PORT!),
    auth: {
      user: process.env.MAIL_USERNAME!,
      pass: process.env.MAIL_PASSWORD!,
    },
  },
})
