pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Branch: ${env.BRANCH_NAME}"
            }
        }

        stage('Build: Main Branch') {
            when {
                branch 'main'
            }
            steps {
                echo 'Running main branch build steps...'
            }
        }

        stage('Build: Feature Branches') {
            when {
                expression { return env.BRANCH_NAME.startsWith("feature/") }
            }
            steps {
                echo "Running feature branch pipeline for ${env.BRANCH_NAME}"
            }
        }
    }
}
