'use client'

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function NewsletterDialog({ open, onOpenChange }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isValidEmail(email)) {
      setLoading(true);
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to subscribe');
        }

        setSuccess(true);
        setTimeout(() => {
          onOpenChange(false);
          setEmail('');
          setSuccess(false);
        }, 2000);
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center gap-4 py-4">
          {success ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-medium text-[#1a2332] text-center"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                You're Subscribed!
              </h3>
              <p 
                className="text-base text-gray-600 font-light text-center"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                Check your inbox for a confirmation email.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <div className="flex flex-wrap w-14 gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1a2332]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1a2332]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1a2332]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1a2332]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1a2332]"></div>
                </div>
              </motion.div>
              
              <DialogHeader className="text-center">
                <DialogTitle 
                  className="text-3xl font-medium text-[#1a2332] text-center"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Stay Updated with AI Insights
                </DialogTitle>
                <DialogDescription 
                  className="text-base text-gray-600 font-light leading-relaxed text-center"
                  style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                >
                  Get weekly updates on automation strategies, industry trends, and exclusive insights delivered to your inbox.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                required
                className="pl-10 h-12 text-base border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                  {error}
                </p>
              )}
            </div>
            
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1a2332] hover:bg-[#2a3342] text-white rounded-full h-12 text-lg font-normal shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              {loading ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>

              <p 
                className="text-xs text-gray-500 text-center font-light"
                style={{ fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                By subscribing, you agree to receive our weekly newsletter. You can unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}