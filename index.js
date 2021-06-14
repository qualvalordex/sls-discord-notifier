const axios = require('axios').default

const discordWebhookId = process.env.DISCORD_WEBHOOK_ID
const discordWebhookToken = process.env.DISCORD_WEBHOOK_TOKEN
const discordWebhookURL = `https://discord.com/api/webhooks/${discordWebhookId}/${discordWebhookToken}`

exports.handler = async function (event, context, callback) {
	const bucketName = event.Records[0].s3.bucket.name
	const fileName = event.Records[0].s3.object.key

	try {
		await axios.post(
			discordWebhookURL,
			{ content: `The file ${fileName} was uploaded to ${bucketName} S3 bucket.` }
		);
		callback(null);
	} catch (error) {
		console.error(error);
	}
};