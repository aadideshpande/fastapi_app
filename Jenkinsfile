pipeline {
    agent any

    environment {
        VERSION = "1.0.${BUILD_NUMBER}"  // Semantic-ish versioning
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    sh """
                        mkdir -p build
                        echo "Build version: ${VERSION}" > build/VERSION.txt
                        zip -r build/myapp-${VERSION}.zip * .[^.]* || true
                    """
                }
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'build/*.zip', fingerprint: true
                archiveArtifacts artifacts: 'build/VERSION.txt', fingerprint: true
            }
        }
    }
}
