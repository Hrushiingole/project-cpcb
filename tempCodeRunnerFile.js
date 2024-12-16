request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    const decodedData = Buffer.from(response.body, 'base64').toString('utf-8');
  
  // Step 2: Parse the decoded data into JSON
  const jsonData = JSON.parse(decodedData);
  
  // Output the JSON object
  console.log(jsonData);
  generateTable(jsonData);
  });