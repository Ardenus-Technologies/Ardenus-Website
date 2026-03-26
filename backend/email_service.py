"""
Ardenus Demo Request Email Service

A FastAPI-based service that receives demo request form submissions
and sends formatted HTML emails to the specified recipients.

Usage:
    pip install fastapi uvicorn python-dotenv aiosmtplib
    python email_service.py

Or with uvicorn:
    uvicorn email_service:app --reload --port 8000
"""

import os
import time
import asyncio
from datetime import datetime
from typing import Optional
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from collections import defaultdict

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import aiosmtplib
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Ardenus API",
    docs_url=None,
    redoc_url=None,
    openapi_url=None,
)

# CORS configuration - production origins only
ALLOWED_ORIGINS = os.getenv(
    "CORS_ORIGINS",
    "https://ardenus.com,https://www.ardenus.com"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

# Email configuration from environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
FROM_EMAIL = os.getenv("FROM_EMAIL", SMTP_USER)
FROM_NAME = os.getenv("FROM_NAME", "Ardenus Website")

# Recipients from environment variable
RECIPIENTS = [
    r.strip() for r in os.getenv("EMAIL_RECIPIENTS", "").split(",") if r.strip()
]

# Rate limiting for email endpoint
email_rate_limit: dict[str, list[float]] = defaultdict(list)
EMAIL_RATE_WINDOW = 3600  # 1 hour
EMAIL_RATE_MAX = 5  # 5 submissions per hour per IP


def is_email_rate_limited(ip: str) -> bool:
    now = time.time()
    # Clean old entries
    email_rate_limit[ip] = [
        t for t in email_rate_limit[ip] if now - t < EMAIL_RATE_WINDOW
    ]
    if len(email_rate_limit[ip]) >= EMAIL_RATE_MAX:
        return True
    email_rate_limit[ip].append(now)
    return False


class DemoRequest(BaseModel):
    """Schema for demo request form data"""
    firstName: str
    lastName: str
    email: EmailStr
    phone: Optional[str] = None
    company: str
    jobTitle: str
    state: str
    goals: str


def generate_html_email(data: DemoRequest) -> str:
    """Generate a clean, professional HTML email from form data"""

    submitted_at = datetime.now().strftime("%B %d, %Y at %I:%M %p")

    html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #000000; padding: 32px 40px; border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                                New Demo Request
                            </h1>
                            <p style="margin: 8px 0 0 0; color: #a0a0a0; font-size: 14px;">
                                Submitted on {submitted_at}
                            </p>
                        </td>
                    </tr>

                    <!-- Contact Information Section -->
                    <tr>
                        <td style="padding: 32px 40px 24px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                                Contact Information
                            </h2>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">Name</span>
                                        <span style="color: #000000; font-size: 14px; font-weight: 500;">{data.firstName} {data.lastName}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">Email</span>
                                        <a href="mailto:{data.email}" style="color: #0066cc; font-size: 14px; font-weight: 500; text-decoration: none;">{data.email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">Phone</span>
                                        <span style="color: #000000; font-size: 14px; font-weight: 500;">{data.phone if data.phone else "Not provided"}</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Company Information Section -->
                    <tr>
                        <td style="padding: 0 40px 24px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                                Company Information
                            </h2>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">Company</span>
                                        <span style="color: #000000; font-size: 14px; font-weight: 500;">{data.company}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">Job Title</span>
                                        <span style="color: #000000; font-size: 14px; font-weight: 500;">{data.jobTitle}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee;">
                                        <span style="display: inline-block; width: 140px; color: #666666; font-size: 14px;">State</span>
                                        <span style="color: #000000; font-size: 14px; font-weight: 500;">{data.state}</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Goals Section -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #000000; padding-bottom: 8px;">
                                Business Improvement Goals
                            </h2>
                            <div style="background-color: #f8f8f8; padding: 20px; border-left: 4px solid #000000;">
                                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">{data.goals}</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Call to Action -->
                    <tr>
                        <td style="padding: 0 40px 32px 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{data.email}?subject=Re: Demo Request from {data.company}"
                                           style="display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 32px; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 4px;">
                                            Reply to {data.firstName}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f8f8; padding: 24px 40px; border-radius: 0 0 8px 8px; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0; color: #999999; font-size: 12px; text-align: center;">
                                This email was automatically generated from the Ardenus website demo request form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
"""
    return html


def generate_plain_text_email(data: DemoRequest) -> str:
    """Generate plain text version of the email"""

    submitted_at = datetime.now().strftime("%B %d, %Y at %I:%M %p")

    text = f"""
NEW DEMO REQUEST
Submitted on {submitted_at}

CONTACT INFORMATION
-------------------
Name:       {data.firstName} {data.lastName}
Email:      {data.email}
Phone:      {data.phone if data.phone else "Not provided"}

COMPANY INFORMATION
-------------------
Company:    {data.company}
Job Title:  {data.jobTitle}
State:      {data.state}

BUSINESS IMPROVEMENT GOALS
--------------------------
{data.goals}
"""
    return text


async def send_email(data: DemoRequest) -> bool:
    """Send HTML email to all recipients"""

    if not SMTP_USER or not SMTP_PASSWORD:
        raise ValueError("SMTP credentials not configured.")

    if not RECIPIENTS:
        raise ValueError("No email recipients configured.")

    # Create the email message
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Demo Request from {data.company} - {data.firstName} {data.lastName}"
    msg["From"] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg["To"] = ", ".join(RECIPIENTS)
    msg["Reply-To"] = data.email

    # Attach plain text and HTML versions
    plain_text = generate_plain_text_email(data)
    html_content = generate_html_email(data)

    msg.attach(MIMEText(plain_text, "plain"))
    msg.attach(MIMEText(html_content, "html"))

    await aiosmtplib.send(
        msg,
        hostname=SMTP_HOST,
        port=SMTP_PORT,
        start_tls=True,
        username=SMTP_USER,
        password=SMTP_PASSWORD,
    )
    return True


@app.post("/api/demo-request")
async def submit_demo_request(data: DemoRequest, request: Request):
    """Handle demo request form submission."""
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown").split(",")[0].strip()

    if is_email_rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many requests. Try again later.")

    try:
        await send_email(data)
        return {"success": True}
    except Exception:
        raise HTTPException(status_code=500, detail="Request failed.")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
