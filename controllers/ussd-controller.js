function testAPI(req, res) {
    res.send('API test successful')
}

function handleUssd(req, res) {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    // This is the first request. Note how we start the response with CON
    response = `CON What would you like to check
        1. My account
        2. My phone number
        3. My Session ID
        4. My Service Code`;
  } else if (text == "1") {
    // Business logic for first level response
    response = `CON Choose account information you want to view
        1. Account number`;
  } else if (text == "2") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `END Your phone number is ${phoneNumber}`;
  } else if (text == "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "ACC100101";
    // This is a terminal request. Note how we start the response with END
    response = `END Your account number is ${accountNumber}`;
  } else if (text == "3") {
    response = `CON Choose session information you want to view
    1. Session ID`;

  } else if (text == "3*1") {
    response = `END Your session ID is ${sessionId}`;

  } else if (text == "4") {
    response = `END Your service code is ${serviceCode}`;
  }

  // Send the response back to the API
  res.set("Content-Type: text/plain");
  res.send(response);
}

module.exports = {
  handleUssd,
  testAPI,
};