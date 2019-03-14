
# [nOps Auto Remediation](https://app.nops.io/signup/)

Remediation Engine is actively maintained by nOps Team. 

This serverless application deploys a Lambda function to your AWS account that executes the  following auto remediation methods- You can easily deploy the pre-built app from AWS Serverless Reposity here

| Remediations                                                    |
|---------------------------                                      |
|Enforce Server-Side Encrption (SSE) on the AWS S3 bucket.        |
|Enforce Versioning on the AWS S3 bucket.                         |




## Policy Changes
This app creates a lamba execution role with the following permissions. 

| Service    | Policy                     |
|------------|----------------------------|
| - s3       | PutBucketVersioning        |
| - s3       | PutEncryptionConfiguration |
| - s3       | PutBucketAcl               |
| - s3       | PutBucketPolicy            |
| - s3       | PutBucketLogging           |
| - sns      | Publish                    |
| - ec2      | RevokeSecurityGroupEgress  |
| - ec2      | RevokeSecurityGroupIngress |
| - ec2      | CreateTags                 |
| - ec2      | CreateSnapshot             |
| - dynamodb | CreateBackup               |

## Architecture 
![nOps Auto Remediation](/img/serverlessrepo%20-internal.png)


##  Easy Installation
 Go to the official AWS Serverless Repository Application [nOps Remediation Engine](https://serverlessrepo.aws.amazon.com/applications/)  and follow the instructions to install the application

