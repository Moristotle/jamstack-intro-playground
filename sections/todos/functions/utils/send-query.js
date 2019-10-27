require("dotenv").config();

const axios = require("axios");

module.exports = async (query, variables) => {
	const { data } = await axios({
		url: "https://graphql.fauna.com/graphql",
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`
		},
		data: {
			query,
			variables
		}
	});

	return data;
};
