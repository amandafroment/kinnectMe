import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  console.log(payload);
  const options = { method };
  if (payload) {
    // setting the options if there is a payload
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers ||= {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  try {
    const res = await fetch(url, options);
    if (res.ok) return res.json();
  } catch (error) {
    console.log(error);
  }

  // res.ok will be false if the status code set to 4xx in the controller action

  throw new Error("Error in send-request");
}
