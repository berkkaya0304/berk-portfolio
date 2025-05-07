import { NextResponse } from "next/server";
import { tr } from "@/data/locales/tr";
import { en } from "@/data/locales/en";

const languages = {
  tr,
  en,
};

export async function POST(request) {
  try {
    const {
      name,
      profession,
      skills,
      experience,
      education,
      interests,
      goals,
      values,
      achievements,
      personality,
      apiKey,
      language = "tr",
    } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: languages[language].personalBrand.messages.apiKeyRequired },
        { status: 400 }
      );
    }

    const t = languages[language].personalBrand;

    const prompt = `
      ${t.fields.name}: ${name}
      ${t.fields.profession}: ${profession}
      ${t.fields.skills}: ${skills}
      ${t.fields.experience}: ${experience}
      ${t.fields.education}: ${education}
      ${t.fields.interests}: ${interests}
      ${t.fields.goals}: ${goals}
      ${t.fields.values}: ${values}
      ${t.fields.achievements}: ${achievements}
      ${t.fields.personality}: ${personality}

      ${t.responseFormat.summary}
      ${t.responseFormat.strengths.join("\n")}
      ${t.responseFormat.areasForImprovement.join("\n")}
      ${t.responseFormat.recommendations.join("\n")}
    `;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || t.messages.error },
        { status: response.status }
      );
    }

    const responseText = data.candidates[0].content.parts[0].text;
    const cleanedText = responseText.replace(/```json\n?|\n?```/g, "");
    const result = JSON.parse(cleanedText);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: languages[language].personalBrand.messages.error },
      { status: 500 }
    );
  }
}
