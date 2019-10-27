require("dotenv").config();

exports.handler = (event, _context, callback) => {
	const mailgun = require("mailgun-js");

	const mg = mailgun({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN
	});

	//TODO: debug issue related to sending email. All the information is succesfully passed, but both error & response remains undefined)

	console.log("MG INSTANCE :: ", mg);

	const data = JSON.parse(event.body);

	const email = {
		from: "Excited User <me@samples.mailgun.org>",
		to: `${data.name} <${data.email}>`,
		subject: data.subject,
		text: data.body
	};

	mg.messages().send(email, (error, response) => {
		console.log("email ::", email);
		console.log("ERROR :: ", error);
		console.log("RESPONSE :: ", response);
		callback(error, {
			statusCode: 200,
			body: JSON.stringify(response)
		});
	});
};
