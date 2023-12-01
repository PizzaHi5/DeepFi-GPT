Clone of this [repo](https://github.com/smartcontractkit/functions-deepdive-constellation2023), follow for setup

Do not forget to run this on fresh terminals
```
npx env-enc set-pw
```

# Operation
Get the listen script started
```
node listen.js
```
Deploy a functions consumer contracts if you have not already
```
node 01_deployConsumers.js
```
Ensure your chainlink functions subscription is funded, create one with the UI [here](https://functions.chain.link/mumbai) or by running:
```
node 02_createAndFundSub.js
```
Store encrypted secrets data on the DON network for execution if you have not already
```
node 03_secrets.js
```
Make a request to your contract
```
node 04_request.js
```
Your listener should pick up and print out the ChatGPT response when the response is stored onchain. This can take a few minutes. If it has not, you can check the contract manually by copy/pasting the onchain output bytes [here](https://codebeautify.org/hex-string-converter) or use:
```
node 05_readResponse.js
```
