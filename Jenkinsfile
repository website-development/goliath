pipeline{
	agent any
	environment{
		DEPLOY_URL='https://ic.hocelot.com/jenkins'
	}
	stages{
		stage("Checkout and local merge"){
			steps{
				checkout scm
			}
		}
		stage("Build, pack and push"){
			steps{
				sh './packAndPush.sh'
			}
		}
		stage('Generate build properties') {
			steps {
				sh './gen-build-properties.sh'
			}
		}
		stage("Merge PR"){
			steps{
				script {
					slackSend (color:"#69d85f",
							message: "To merge *${repositoryName}* and close PR *${ghprbPullId}* follow the blue link ${DEPLOY_URL}/job/${repositoryName}/${BUILD_ID}/input")
					env.MERGE = input message: 'Do you want to merge the PR?', parameters: [choice(name: "Merge?", choices: 'no\nyes', description: 'Choose "yes" if you want to merge and close the Pull Request')]
					if (MERGE == "yes") {
						sh './merge.sh'
					}
				} 
			}
		}
	}
	post{
		//always{
		//	//echo "========always========"
		//}
		success{
			archiveArtifacts artifacts: 'build.properties', fingerprint: true
		}
		failure{
			echo "========pipeline execution failed========"
		}
	}
}