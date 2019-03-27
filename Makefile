deploy:
	aws s3 cp template.yaml s3://nops-users/remediation/template.yaml --acl public-read
	echo 'https://us-west-2.console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/create/review?templateURL=https:%2F%2Fs3-us-west-2.amazonaws.com%2Fnops-users%2Fremediation%2Ftemplate.yaml&stackName=Nops-Remediation-23309EC'
