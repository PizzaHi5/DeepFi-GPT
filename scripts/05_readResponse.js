const { decodeResult, ReturnType } = require("@chainlink/functions-toolkit");
const { Contract } = require("ethers");

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/FunctionsConsumer.json");

const consumerAddress = "0xa8B83Fb78bcA225ed1A3525f4644C45C513eE6Bb"
const readResponse = async () => {
  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  const responseBytes = await functionsConsumer.s_lastResponse()
  console.log("\nResponse Bytes : ", responseBytes)

  const decodedResponse = decodeResult(responseBytes, ReturnType.string)

  console.log("\nDecoded response from OpenAI/ChatGPT:", decodedResponse)
};

readResponse().catch(err => {
  console.log("Error reading response: ", err);
});
