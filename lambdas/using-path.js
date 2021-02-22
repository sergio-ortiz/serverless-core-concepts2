exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: "<h1>Hello World</h1>",
  };
};
