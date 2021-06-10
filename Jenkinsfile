//Declarative pipeline
pipeline {
    agent any

    stages {
        // stage('GitSCM') {
        //     steps {
        //         checkout('https://github.com/karthikgavipuram/testnodeapp.git')
        //     }
        // }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
                sh 'pwd'
                sh 'node -v'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
