# My React Portfolio

This is my personal portfolio site built with React and styled using Tailwind CSS. It’s hosted on AWS, includes a CI/CD pipeline, and features icons from the React Icons library. The project was set up using Vite as the build tool.

## Features
- **React Icons**: Includes a variety of SVG icons for an enhanced UI.
- **Tailwind CSS**: Utilizes a utility-first CSS framework for styling.
- **Vite**: Provides a fast development environment and optimized production builds.
- **AWS Hosting**: Hosted on AWS S3 with a Route 53 custom domain.
- **CI/CD Pipeline**: Automatically deploys updates through AWS CodePipeline and CodeBuild.

## Continuous Integration / Continuous Deployment (CI/CD)
This project is set up to use AWS CodePipeline for automated deployments:
1. **Source**: The code is stored in a Git repository.
2. **Build**: AWS CodeBuild is configured to install dependencies, run tests, and create the production build (`npm install`, `npm run build`).
3. **Deploy**: The build output is synced to the S3 bucket automatically.

This setup ensures that every code push triggers a new build and deployment, keeping the live site up-to-date without manual intervention.


