const callAPI = async (url, httpMethod = "GET", headers = {'Content-Type': 'application/json'}, requestBody = undefined) => {
    let requestParams = {
        method: httpMethod,
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(requestBody)
    }
    let response = await fetch(basepathDEV()+url,requestParams);
    return await response.json();
}

export const basepathDEV = (protocol = 'http')=>{
    return protocol+'://localhost:8080';
    //return protocol+'://192.168.29.142:3003';
}

export default {callAPI};