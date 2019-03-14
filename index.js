const s3remidiation = require('./remedyengine/s3');
const snsPush = require('./util/snsPush');

exports.handler = (event, context) => {
    var message = event.Records[0].Sns.Message;
    var snsPushService = new snsPush();
    const data = JSON.parse(message);
    console.log('data', data)

    var accountid = JSON.stringify(context.invokedFunctionArn).split(':')[4]
    if (typeof data.AWSaccountId !== 'string') {
        console.log('error', 'not a string')
        context.done;
    }

    if (data.AWSaccountId === accountid) {
        console.log('AWSaccountId', accountid, data.AWSaccountId)

        if (data.Type === "Verify") {

            snsPushService.pushToSNS(JSON.stringify(data));
            context.done;
        }

        if (data.Type === "S3Bucket") {
            console.log('data.type', data.type, data.AWSaccountId)
            context.callbackWaitsForEmptyEventLoop = false;
            var s3remidiationService = new s3remidiation();
            s3remidiationService.handleS3Remediation(data, function (err, res) {
                console.log('res', res, data.AWSaccountId)

                snsPushService.pushToSNS(JSON.stringify(data));
                context.done;

            });

        }
        else {
            context.done;

        }
    }




};


