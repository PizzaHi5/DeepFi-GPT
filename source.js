// Data to be sent in the request body
const requestData = {
    "entry_price": "",
};

const postData = {
    body: JSON.stringify(requestData),
};

const aiTraderResponse = await Functions.makeHttpRequest({
    url: "http://ethtrader.pythonanywhere.com/trading_signal",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    data: requestData,
});

if(aiTraderResponse.error) {
    throw new Error(JSON.stringify(aiTraderResponse));
}

const result = aiTraderResponse.signal;

console.log(result);
return Functions.encodeString(result);