import { useState, useEffect } from "react";

const API_KEY = process.env["REACT_APP_GOOGLE_SEARCH_API_KEY"];

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.append("Access-Control-Allow-Credentials", "true");

        headers.append("GET", "POST", "OPTIONS");

        const response = await fetch(
          `https://cse.google.com/cse?key=${API_KEY}&cx=b41b1bc5a889d400f&q=${term}`,
          {
            headers: headers,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Result", result);
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
        // يمكنك هنا التعامل مع الخطأ بشكل مناسب، مثل إظهار رسالة للمستخدم
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term]);

  return { data, loading };
};

export default useGoogleSearch;
