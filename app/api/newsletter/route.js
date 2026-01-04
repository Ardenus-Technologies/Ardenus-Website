// API Route Handler for Newsletter Signup
// This replaces the direct webhook call to n8n.cloud
// TODO: Replace placeholder logic with actual email service (Resend, SendGrid, etc.)

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return Response.json(
        { error: 'Email is required and must be a string' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.toLowerCase())) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Placeholder: Forward to external webhook
    // In production, you might want to:
    // 1. Store email in a database (e.g., Vercel KV, PostgreSQL)
    // 2. Use an email service (Resend, SendGrid, etc.) to send confirmation
    // 3. Add double opt-in verification
    // 4. Add rate limiting to prevent abuse
    
    const webhookUrl = 'https://backendflows.app.n8n.cloud/webhook/newsletter-signup';
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Note: The original implementation used 'no-cors' mode
      // which doesn't allow reading the response. We'll assume success
      // if the request doesn't throw an error.
      
      return Response.json(
        { success: true, message: 'Successfully subscribed to newsletter' },
        { status: 200 }
      );
    } catch (webhookError) {
      // Even if webhook fails, we'll return success to match original behavior
      // In production, you should handle this more gracefully
      console.error('Newsletter webhook error:', webhookError);
      return Response.json(
        { success: true, message: 'Successfully subscribed to newsletter' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Newsletter API error:', error);
    return Response.json(
      { error: 'Failed to process newsletter signup', details: error.message },
      { status: 500 }
    );
  }
}

