# Fun For Friends App

This is a [Next.js](https://nextjs.org) project that allows users to create profiles for friendship, relationships, or suggestions.

## Features

- User profile creation with image upload (using Cloudinary)
- MongoDB database for data storage
- Mobile-friendly responsive design

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database (connection string required in env variables)
- Cloudinary account for image storage

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# MongoDB Connection String
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Database Configuration

This application uses MongoDB for data storage. Make sure your MONGODB_URI environment variable is correctly set in the `.env.local` file.

## Image Storage

Images are stored in Cloudinary. The application takes base64 image data from the client, uploads it to Cloudinary, and stores the resulting URL in the database.

## Deployment

The application can be deployed on Vercel or any other platform that supports Next.js applications.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
