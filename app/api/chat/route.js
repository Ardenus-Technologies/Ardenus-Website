// API Route Handler for ChatBot
// This replaces the direct webhook call to n8n.cloud
// TODO: Replace placeholder logic with actual database/email service integration

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, conversationHistory } = body;

    // Validate input
    if (!message || typeof message !== 'string') {
      return Response.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Placeholder: Forward to external webhook
    // In production, you might want to:
    // 1. Store conversation history in a database
    // 2. Use a proper AI service (OpenAI, Anthropic, etc.)
    // 3. Add authentication/rate limiting
    
    const webhookUrl = 'https://backendflows.app.n8n.cloud/webhook/b9ccdc12-4e03-4e20-9abf-3698231c7eac';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory: conversationHistory || []
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return Response.json(
      { response: data.response || "I'm here to help! How can I assist you today?" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process chat message', details: error.message },
      { status: 500 }
    );
  }
}

