// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-west-2' });

// Create publish parameters
var params = {MessageGroupId:'id1', MessageDeduplicationId:"id1",
  Message: 'Hi there', /* required */
  TopicArn: 'arn:aws:sns:us-west-2:190580079572:orders.fifo'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function (data) {
    console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function (err) {
      console.error(err, err.stack);
    });
