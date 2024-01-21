import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import yellow_slug from "@/assets/yellow_slug.json";
import Lottie from "lottie-react";

function AskGPT(Prompt) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const callChatGPT = useCallback(async () => {
    try {
      const promptString = JSON.stringify(Prompt).toString();
      const apiUrl = `https://api-cruzhacks2024.onrender.com/chatgpt?input=(Find%20a%20solution%20to%20issues:%20${promptString})}&prompt=You%20are%20good%20at%20finding%20an%20solution%20to%20issues.`;
      console.log(apiUrl);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setContent(data.message.content);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [Prompt]);

  useEffect(() => {
    const fetchData = async () => {
      const timeout = setTimeout(() => {}, 5000);
      if (
        typeof Prompt === "object" &&
        Prompt !== null &&
        JSON.stringify(Prompt).includes("null")
      ) {
        console.log(JSON.stringify(Prompt).toString());
      } else {
        console.log("Calling API");
        await callChatGPT();
      }
      return () => clearTimeout(timeout);
    };
    fetchData();
  }, [Prompt, callChatGPT]);

  return (
    <Box>
      {loading ? (
        <Lottie
          animationData={yellow_slug}
          className="flex justify-center items-center"
          loop={true}
        />
      ) : (
        <>
          {content && (
            <Box width={"100%"} height={"50vh"} style={{ overflow: "auto" }}>
              {content}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default AskGPT;
