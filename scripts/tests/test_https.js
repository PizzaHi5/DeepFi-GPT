const fs = require('fs').promises;

async function readDataFromFile(filePath) {
  try {
    // Read data from file
    const fileData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

async function makeApiRequest() {
  // Specify the file path where API URL and request data are stored
  const filePath = 'prompts/test_https.txt';

  try {
    // Read API URL and request data from file
    const { apiUrl, requestData } = await readDataFromFile(filePath);

    // Options for the fetch request
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };

    // Get Fetch module
    fetchMod = await import('node-fetch');
    fetch = fetchMod.default;

    // Make the POST request
    const response = await fetch(apiUrl, requestOptions);

    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const responseData = await response.json();

    // Log the parsed response data
    console.log('Response:', responseData);
  } catch (error) {
    // Log any errors that occurred during the process
    console.error('Error:', error.message);
  }
}

// Call the function to make the API request
makeApiRequest();
