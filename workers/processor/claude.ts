import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const apiKey = process.env.ANTHROPIC_API_KEY;

export const claude = new Anthropic({
  apiKey: apiKey || 'missing-key',
});

// Helper to call Claude with a simple prompt
export async function ask(prompt: string, maxTokens = 1024): Promise<string> {
  const response = await claude.messages.create({
    model: 'claude-3-haiku-20240307', // Fast and cheap for classification
    max_tokens: maxTokens,
    messages: [{ role: 'user', content: prompt }],
  });

  const textBlock = response.content.find((block) => block.type === 'text');
  return textBlock?.text || '';
}

// Helper for JSON responses
export async function askJson<T>(prompt: string, maxTokens = 1024): Promise<T> {
  const response = await ask(prompt, maxTokens);

  // Extract JSON from response (handle markdown code blocks)
  let jsonStr = response;
  const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    jsonStr = jsonMatch[1];
  }

  return JSON.parse(jsonStr.trim());
}
