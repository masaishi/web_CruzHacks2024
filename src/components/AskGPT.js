import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function AskGPT(Prompt) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const callChatGPT = async () => {
	console.log("callChatGPT");
    try {
      const apiUrl = `https://api-cruzhacks2024.onrender.com/chatgpt?input=Find a solution to issue: ${Prompt}&prompt=You%20are%20a%20poetic%20assistant%2C%20skilled%20in%20explaining%20complex%20programming%20concepts%20with%20creative%20flair.`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Extract the content from the response
        setContent(data.message.content);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };useEffect(() => {
    // Call ChatGPT when the component mounts
    callChatGPT();
  }, []);

  return (
    <Box>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {content && (
            <Box>
              Content: {content}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default AskGPT;
