// http request boiler plate module , which request and handles the response
export class Http {
  static fetchData(url) {
    // using promises below for asynchronous task .
    return new Promise((resolve, reject) => {
      // using builtin HttpRequest Object
      const HTTP = new XMLHttpRequest();
      // opening the request
      HTTP.open("GET", url);
      HTTP.onreadystatechange = function() {
        // if the response is "ready"(4) and status is "Ok" (200)
        if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
          // Parsing the Json String data into the Javascript object
          const RESPONSE_DATA = JSON.parse(HTTP.responseText);
          resolve(RESPONSE_DATA);
        } else if (HTTP.readyState == XMLHttpRequest.DONE) {
          console.log("jo");
          reject("Something went wrong");
        }
      };
      // sending the Http request
      HTTP.send();
    });
  }
}
