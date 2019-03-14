const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/**
 * class S3RemidiationService
 */
class S3RemidiationService {

    handleS3Remediation(s3Details, cbS3Remediation) {

        switch (s3Details.RuleNo) {
            case "S3001":
                this.handleS3001(s3Details, (err, res) => {
                    cbS3Remediation(err, res);
                });
                break;
            case "S3002":
                this.handleS3002(s3Details, (err, res) => {
                    cbS3Remediation(err, res);
                });
                break;
        }


    }
    //putBucketEncryption
    handleS3001(s3Details, callback) {
        console.log("detail;s", s3Details)
        const params = {
            Bucket: s3Details.targetBucketName, /* required */
            ServerSideEncryptionConfiguration: { /* required */
                Rules: [ /* required */
                    {
                        ApplyServerSideEncryptionByDefault: {
                            SSEAlgorithm: 'AES256'
                        }
                    },
                ]
            }
        };
        s3.putBucketEncryption(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
            return callback(err, data);

        });


    }

    handleS3002(s3Details, callback) {
        console.log("detail;s", s3Details)

        const params = {
            Bucket: s3Details.targetBucketName, /* required */
            VersioningConfiguration: { /* required */
                MFADelete: Enabled,
                Status: Enabled
            }
        };
        s3.putBucketVersioning(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
            return callback(err, data);

        });


    }

}

module.exports = S3RemidiationService;