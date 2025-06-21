# Weather App - A Node.js Application

A simple weather application built with Node.js and Express that displays weather conditions for any city. The application includes a complete CI/CD pipeline for deployment to AWS EC2 using Docker and ECR.

## Features

- Enter city name to get current weather conditions
- Displays temperature, weather description, and humidity
- Responsive web interface
- Dockerized application
- Automated CI/CD pipeline with GitHub Actions

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **API**: wttr.in (free weather service)
- **Containerization**: Docker
- **Cloud**: AWS EC2, ECR
- **CI/CD**: GitHub Actions

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cicd-nodejs-application

# Install dependencies
npm install

# Start the application
npm start
```

The application will be available at `http://localhost:4000`

## Docker

### Build and Run

```bash
# Build Docker image
docker build -t username/weather-app .

# Run container
docker run -p 4000:4000 username/weather-app
```

## AWS Deployment

### Prerequisites

1. **AWS Account** with ECR repository created
2. **EC2 Instance** with:
   - Docker installed
   - Security group allowing port 4000
   - IAM role or AWS CLI configured

### GitHub Secrets Required

Set these secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)
- `ECR_REPOSITORY` - ECR repository name
- `EC2_HOST` - EC2 instance public IP
- `EC2_USER` - EC2 username (ec2-user/ubuntu)
- `EC2_SSH_KEY` - Private SSH key for EC2

### Deployment Process

The CI/CD pipeline automatically:
1. Builds Docker image on push to main branch
2. Pushes image to AWS ECR
3. Deploys to EC2 instance
4. Runs application on port 4000

## Project Structure

```
├── .github/workflows/
│   └── deploy.yml          # CI/CD pipeline
├── public/
│   └── index.html          # Frontend interface
├── server.js               # Express server
├── package.json            # Dependencies
├── Dockerfile              # Container configuration
├── .dockerignore          # Docker ignore rules
└── README.md              # Documentation
```

## Usage

1. Open the application in your browser
2. Enter a city name in the input field
3. Click "Get Weather" or press Enter
4. View the weather information displayed

## API Reference

- `GET /weather/:city` - Returns weather data for specified city

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
