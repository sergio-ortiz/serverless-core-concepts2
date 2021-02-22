exports.handler = async function (event, context) {
  const name = event.queryStringParameters.name;
  return {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: `<h1>Hello ${name}</h1>`,
  };
};
