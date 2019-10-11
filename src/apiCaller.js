const callAPI = async (url, httpMethod = "GET", headers = {'Content-Type': 'application/json'}, requestBody = undefined) => {
    let requestParams = {
        method: httpMethod,
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(requestBody)
    }
    let response = await fetch(basepath()+url,requestParams);
    return await response.json();
}

const basepathDEV = ()=>{
    return 'http://localhost:3003';
}

const basepath = ()=>{
    return 'http://192.168.29.142:8080';
}

export default {callAPI};