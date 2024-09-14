import createNextIntlPlugin from 'next-intl/plugin';
 

/** @type {import('next').NextConfig} */


const withNextIntl = createNextIntlPlugin();


import path from 'path';
const __dirname = path.resolve();

const nextConfig = {



  images: {
    unoptimized: true,
  },

 // output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

    reactStrictMode: false,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
  //      includePaths: [path.join(__dirname, 'styles')],
    },
    /*
    async rewrites() {
      return [
        {
          source: '/api/v1/:path*',
          destination: 'http://localhost:5000/api/v1/:path*',
        },
      ]
    },

    api: {
      bodyParser: {
        sizeLimit: '500kb',
      },
      responseLimit:  '8mb',
      //externalResolver: true,
    },
    */

    async headers() {
      return [
          {
              // matching all API routes
              source: "/api/sendemail/:path*",
              headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
              ]
          }
      ]
  }
}    

export default withNextIntl(nextConfig);

//export default nextConfig;

