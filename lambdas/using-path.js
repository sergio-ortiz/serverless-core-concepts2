exports.handler = async function (event, context) {
  const path = event.path.split("/").pop();

  return {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: `<h1>Hello ${path}</h1>`,
  };
};
