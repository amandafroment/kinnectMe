import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    // setting the options if there is a payload
    options.headers = { "Content-Type": "application/json" };
    console.log(payload, "This is the payload.");
    options.body = JSON.stringify(payload);
    console.log(options.body, "This is options.body.");
  }
  const token = getToken();

  if (token) {
    options.headers ||= {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);

  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Error in send-request");
}
