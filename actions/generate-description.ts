"use server";

import axios from "axios";

import { prisma } from "@/lib/db";

export async function generateDescription(propertyId, seed = 12345) {
  console.log("Fetching images for property ID:", propertyId); // Log the property ID being queried
  const openaiApiKey = process.env.OPENAI_API_KEY;

  let propertyDescriptionText;
  try {
    const images = await prisma.image.findMany({
      where: { propertyId },
      select: { selectedOption: true },
    });

    propertyDescriptionText = images
      .map((image) => image.selectedOption)
      .filter((text) => text != null) // Ensure no null values are included
      .join(" ");
  } catch (fetchError) {
    console.error("Error fetching images from the database:", fetchError);
    throw new Error("Error fetching images from the database");
  }

  if (!openaiApiKey) {
    console.error("OpenAI API key is not set in environment variables.");
    throw new Error("OpenAI API key not found");
  }

  const headers = {
    Authorization: `Bearer ${openaiApiKey}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    model: "gpt-4-1106-preview", // or another model as needed
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Jeg ønsker at du skal være en eiendomsmegler som skal lage en salgsannonse. Jeg trenger alltid en tittel og beskrivelsen nedenfor. Lag det i en JSON-format. Jeg trenger alltid at Json bruker kun title, description, section, details.",
        // "Jeg ønsker at du skal være en eiendomsmegler som skal lage en tittel til en annonse. Jeg trenger at du alltid starter med tittel og jeg trenger kun tittelen. Lag det i en JSON-format. Jeg trenger alltid at Json bruker kun title",
      },
      { role: "user", content: propertyDescriptionText },
    ],
  };

  console.log("Sending request to OpenAI with requestBody:", requestBody); // Log the requestBody being sent

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestBody,
      { headers },
    );
    const generatedDescription = response.data.choices[0].message.content;
    console.log("Received response from OpenAI:", generatedDescription); // Log the OpenAI response
    return generatedDescription;
  } catch (error) {
    console.error("Error generating property description with OpenAI:", error);
    throw new Error("Error generating property description with OpenAI");
  }
}
