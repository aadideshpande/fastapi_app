pipeline {
    agent any

    environment {
        SONAR_PROJECT_KEY = 'my-fastapi-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeLocal') {
                    sh '''
                    sonar-scanner \
                      -Dsonar.projectKey=my-fastapi-app \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://localhost:9000
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build passes quality gate ✅"'
            }
        }
    }
}
