module.exports = ({ env }) => ({
    // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
  
    email: {
      config: {
        provider: 'mailgun',
        providerOptions: {
          key: env('MAILGUN_API_KEY'), // Required
          domain: env('MAILGUN_DOMAIN'), // Required
          
        },
        settings: {
          defaultFrom: 'akthernasrin740@gmail.com',
          defaultReplyTo: 'akthernasrin740@gmail.com',
        },
      },
    },
   // ....
  });

