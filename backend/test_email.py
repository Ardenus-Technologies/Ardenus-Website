"""
Test script for the email service.

This script sends a test email to verify the SMTP configuration is working.

Usage:
    1. Create a .env file in the backend directory with your SMTP credentials
    2. Run: python test_email.py
"""

import asyncio
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import from the email service
from email_service import DemoRequest, send_email, RECIPIENTS, SMTP_USER

async def test_send_email():
    """Send a test demo request email"""

    print("\n" + "=" * 60)
    print("  Email Service Test")
    print("=" * 60)

    # Check if SMTP is configured
    if not SMTP_USER:
        print("\n  ERROR: SMTP_USER is not set!")
        print("  Please create a .env file with your SMTP credentials.")
        print("  See .env.example for the required variables.\n")
        return False

    print(f"\n  Sending test email to:")
    for r in RECIPIENTS:
        print(f"    - {r}")
    print()

    # Create test data
    test_data = DemoRequest(
        firstName="Test",
        lastName="User",
        email="test@example.com",
        phone="+1 (555) 123-4567",
        company="Test Company Inc.",
        jobTitle="Chief Testing Officer",
        state="California",
        goals="This is a test submission to verify the email service is working correctly.\n\nWe want to:\n- Test the HTML email template\n- Verify SMTP delivery\n- Check all form fields are included"
    )

    try:
        print("  Sending email...")
        await send_email(test_data)
        print("  SUCCESS! Email sent successfully.\n")
        print("  Check the inboxes of the recipients to verify delivery.")
        print("=" * 60 + "\n")
        return True
    except Exception as e:
        print(f"  FAILED: {e}\n")
        print("  Troubleshooting tips:")
        print("    - Verify your SMTP credentials are correct")
        print("    - For Gmail, use an App Password, not your regular password")
        print("    - Check if 'Less secure app access' is needed (not recommended)")
        print("    - Ensure your firewall allows outgoing SMTP connections")
        print("=" * 60 + "\n")
        return False


if __name__ == "__main__":
    asyncio.run(test_send_email())
