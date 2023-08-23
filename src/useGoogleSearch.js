import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "b41b1bc5a889d400f";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cse.google.com/cse?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
        // يمكنك هنا التعامل مع الخطأ بشكل مناسب، مثل إظهار رسالة للمستخدم
      }
    };

    fetchData();
  }, [term]);
  return !data;
};

export default useGoogleSearch;
