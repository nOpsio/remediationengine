
# nOps Auto-Remediation

nOps Auto-Remediation Engine is actively maintained by the team at nOps.

This serverless application deploys a Lambda function and one SNS topic to your AWS account that executes the following auto-remediation methods. 

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
| - s3       | List*                         |
| - sns      | Publish                    |
| - cloudformation      | DescribeStacks  |
| - cloudformation      | ListStackResources |


## Architecture 
![nOps Auto Remediation](https://raw.githubusercontent.com/nOpsio/remediationengine/master/img/serverlessrepo%20-internal.png)


##  Easy Installation
 Go to the official AWS Serverless Repository Application [nOps Auto-Remediation Engine](https://serverlessrepo.aws.amazon.com/applications/)  and follow the instructions to install the application

