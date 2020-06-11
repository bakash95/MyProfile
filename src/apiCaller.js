const callAPI = async (url, httpMethod = "GET", headers = { 'Content-Type': 'application/json' }, requestBody = undefined) => {

    let controller = new AbortController()

    let requestParams = {
        method: httpMethod,
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(requestBody),
        signal: controller.signal
    }

    setTimeout(() => { controller.abort() }, 3000)

    let response;
    try {
        await fetch(basepathDEV() + url, requestParams);
    } catch (error) {
        throw error;
    }
    return await response.json();
}

export const basepathDEV = (protocol = 'https') => {
    return protocol + '://profilebe.herokuapp.com';
}

export default { callAPI };