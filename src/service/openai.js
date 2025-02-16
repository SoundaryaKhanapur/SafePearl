import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Allow browser usage (required for React)
});

// Function to get advice from OpenAI
const getOpenAIAdvice = async (inputText) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use GPT-3.5 Turbo or GPT-4
      messages: [
        {
          role: "system",
          content:
            "You are a supportive assistant that provides advice and guidance to victims of harassment. " +
            "Structure your response into three sections: " +
            "1. What Happened: Acknowledge the user's experience. " +
            "2. Encouragement: Encourage the user to speak up and not remain silent. " +
            "3. Coping Strategies: Provide actionable advice on how to cope with the situation. " +
            "Use clear headings for each section.",
        },
        {
          role: "user",
          content: inputText,
        },
      ],
      max_tokens: 500, // Limit response length
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Sorry, something went wrong. Please try again later.";
  }
};

export default getOpenAIAdvice;
