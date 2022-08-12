import { useState } from "react";

export default function useFetch() {
  const [loader, setLoader] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoader(false);
            return reject(data);
          }
          setLoader(false);
          resolve(data);
        })
        .catch((error) => {
          setLoader(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoader(false);
            return reject(data);
          }
          setLoader(false);
          resolve(data);
        })
        .catch((error) => {
          setLoader(false);
          reject(error);
        });
    });
  }

  return { get, post, loader };
}
