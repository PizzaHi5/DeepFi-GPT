const requestData = {
    "entry_price": "",
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

const action = aiTraderResponse.data.signal;

console.log(action);
return Functions.encodeString(action);