pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('DOCKERHUB_CREDENTIALS') 
        REPO = 'app'
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                echo 'Building Image...'
                docker build -t $DOCKERHUB_CREDENTIALS_USR/$REPO:$BUILD_NUMBER .
                '''
            }
        }

        stage('Login to Docker Hub') {      	
            steps{                       	
	            sh '''
                echo "$DOCKERHUB_CREDENTIALS_USR"
                echo "$DOCKERHUB_CREDENTIALS_PSW"
                echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
	            echo 'Login Completed'    
                '''  
            }           
        }   


        stage('Push Image to Docker Hub') {         
            steps{                            
	            sh '''
                docker push $DOCKERHUB_CREDENTIALS_USR/$REPO:$BUILD_NUMBER              
                echo 'Push Image Completed' 
                '''      
            }           
        }      
    }
}

