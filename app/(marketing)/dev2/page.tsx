"use client"
import React, { useState } from 'react';
import { Loader2 as Spinner } from "lucide-react";

export default function PricingPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [allResponses, setAllResponses] = useState<Response[]>([]);
  const [language, setLanguage] = useState('english');

  type Response = {
    imageUrl: string;
    options: string[];
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch('/api/ai/analyzeImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, language }),
    });

    const responseData = await response.json();
    setIsLoading(false);

    if (responseData.choices && responseData.choices.length > 0) {
      const options = responseData.choices[0].message.content.split('\n')
        .filter(line => line.trim() !== '')
        .map(line => line.replace(/"/g, ''));
      setAllResponses(prevResponses => [...prevResponses, { imageUrl, options }]);
    } else {
      setAllResponses(prevResponses => [...prevResponses, { imageUrl, options: ['No analysis result found.'] }]);
    }
  };

  const handleGenerateDescription = async () => {
    // Define the specific text request
    const requestText = "I need you to act like a real estate agent and write a description for this house. I need a title and a description";
  
    // Sending all responses and the specific text to a new API route
    const response = await fetch('/api/generateDescription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ allResponses, text: requestText }),
    });
  
    // Process the response from the new API route as needed
    const responseData = await response.json();
    // You can then process and display this responseData as needed
  };
  

  return (
    <div className="flex justify-center pt-10"> {/* Remove h-screen and add padding-top */}
      <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col items-center gap-4 px-4">
        <input 
          name="imageUrl" 
          type="text" 
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste image URL here" 
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        />
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        >
          <option value="english">English</option>
          <option value="swedish">Swedish</option>
          <option value="norwegian">Norwegian</option>
        </select>
        <button 
          type="submit" 
          className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Spinner className="mr-2 animate-spin" />
              Analyzing Image...
            </>
          ) : 'Analyze Image'}
        </button>
        <button 
          type="button" 
          onClick={handleGenerateDescription}
          className="flex w-full items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Generate Description
        </button>

        <div className="w-full overflow-auto">
          {allResponses.map((response, index) => (
            <div key={index} className="mb-4">
              <img src={response.imageUrl} alt={`Preview ${index + 1}`} className="max-w-xs max-h-60 rounded-md mb-4" />
              {response.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-4 w-full rounded-md border bg-gray-100 p-4">
                  <p className="font-semibold text-gray-700">Option {optionIndex + 1}:</p>
                  <p>{option}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
