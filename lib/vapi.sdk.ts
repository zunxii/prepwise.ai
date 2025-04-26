import Vapi from '@vapi-ai/web';

// Fix the environment variable name and provide a fallback
const VAPI_WEB_TOKEN = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN || '';

// Create and export the initialized instance
export const vapi = new Vapi(VAPI_WEB_TOKEN);