const serverUrl = "https://sn0y7.sse.codesandbox.io";

const networkRequests = (endPoint, method = "GET", data = {}) => 
  new Promise((resolve, reject) => {

    const headers = new Headers({
      "Content-Type": "application/json",
    })

    const config = {
      method,
      mode: "cors",
      headers
    };

    if(method !== "GET") {
      config.body = JSON.stringify(data);
    }

    fetch(`${serverUrl}${endPoint}`, config)
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw Error("network request failed!!");
        }
      })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });

export default networkRequests;