const AWS = require('aws-sdk');
const TOPIC_ARN = process.env.SNS_TOPIC_ARN;

/**
 * class SNSPushService
 */
class SNSPushService {



    pushToSNS(message) {
        console.log('From SNS:', message);
        var params = {
            Message: JSON.stringify(message),
            Subject: "Test SNS From Lambda",
            TopicArn: TOPIC_ARN
        };
        var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

        // Handle promise's fulfilled/rejected states
        //context.callbackWaitsForEmptyEventLoop = false;

        publishTextPromise.then(
            function (data) {
                console.log("Message ${params.Message} send sent to the topic", params.TopicArn);
                console.log("MessageID is " + data.MessageId);
            }).catch(
                function (err) {
                    console.error(err, err.stack);
                });

        return;



    }
}

module.exports = SNSPushService;