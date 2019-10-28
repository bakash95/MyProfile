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

// const basepathDEV = ()=>{
//     return 'http://localhost:8080';
// }

const basepath = ()=>{
    return 'http://192.168.29.142:3003';
}

export default {callAPI};