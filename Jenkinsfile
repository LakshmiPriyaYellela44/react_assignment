pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Name must match Jenkins tool config
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies'
                sh 'npm install'
            }
        }

        stage('Lint (Optional)') {
            steps {
                echo 'Running lint'
                sh 'npm run lint || true'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React application'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Build successful'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
