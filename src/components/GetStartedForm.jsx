'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { getStartedSchema } from '@/lib/validations/getStartedSchema';
import { US_STATES } from '@/data/usStates';

const slideEasing = [0.34, 1.56, 0.64, 1];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  },
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.6, ease: slideEasing }
  },
  exit: {
    x: '100%',
    transition: { duration: 0.6, ease: slideEasing }
  },
};

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
};

export default function GetStartedForm({ open, onOpenChange }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const panelRef = useRef(null);
  const firstInputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(getStartedSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      businessEmail: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
      state: '',
      businessGoals: '',
      businessOverview: '',
      emailOptIn: false,
    },
  });

  // Body scroll lock
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open && !isSuccess) {
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open, isSuccess]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onOpenChange]);

  // Reset form and success state when closed
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        setServerError('');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [open, form]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError('');

    try {
      // Placeholder submission - simulates API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, replace with actual API call:
      // const response = await fetch('/api/get-started', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   const error = await response.json();
      //   throw new Error(error.message || 'Submission failed');
      // }

      console.log('Form submitted:', data);
      setIsSuccess(true);

      setTimeout(() => {
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      setServerError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = form.formState.isValid;

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 backdrop-blur-md bg-black/40"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            ref={panelRef}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="get-started-title"
            className="fixed top-0 right-0 bottom-0 z-50 w-full md:w-1/2 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 md:p-8 pb-4 border-b border-gray-100">
              <div>
                <h2
                  id="get-started-title"
                  className="text-xl md:text-2xl font-medium text-[#1a2332]"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  Get Started with Ardenus
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Tell us about your business and we'll reach out within 24 hours
                </p>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors -mt-1 -mr-1"
                aria-label="Close form"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Form Content */}
            <ScrollArea className="flex-1">
              <div className="p-6 md:p-8 pt-6">
                {isSuccess ? (
                  <motion.div
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3
                      className="text-xl font-medium text-[#1a2332] mb-2"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      Thank you for your interest!
                    </h3>
                    <p className="text-gray-500 text-center max-w-sm">
                      We've received your information and will be in touch within
                      24 hours to discuss how Ardenus can help your business.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      {/* First Name + Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#1a2332]">
                                First Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  ref={firstInputRef}
                                  placeholder="John"
                                  className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-[#1a2332]">
                                Last Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Smith"
                                  className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Business Email */}
                      <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Business Email <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="john.smith@company.com"
                                className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone Number */}
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Phone Number{' '}
                              <span className="text-gray-400 font-normal">
                                (optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Company */}
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Company <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Acme Pest Control"
                                className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Job Title */}
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Job Title <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Operations Manager"
                                className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* State */}
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              State <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-11 border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332]">
                                  <SelectValue placeholder="Select your state" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-[60] max-h-[300px]">
                                {US_STATES.map((state) => (
                                  <SelectItem key={state.value} value={state.value}>
                                    {state.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Business Improvement Goals */}
                      <FormField
                        control={form.control}
                        name="businessGoals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Business Improvement Goals{' '}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={3}
                                placeholder="What aspects of your business are you looking to improve?"
                                className="border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332] resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Business Overview */}
                      <FormField
                        control={form.control}
                        name="businessOverview"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#1a2332]">
                              Business Overview{' '}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={4}
                                placeholder="Tell us about your business and any operational bottlenecks you're experiencing"
                                className="border-gray-200 focus:border-[#1a2332] focus:ring-[#1a2332] resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email Opt-in */}
                      <FormField
                        control={form.control}
                        name="emailOptIn"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-0.5"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal text-gray-600 cursor-pointer">
                                I'd like to receive updates and insights from
                                Ardenus
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Server Error */}
                      {serverError && (
                        <p className="text-sm text-red-500 bg-red-50 p-3 rounded-md">
                          {serverError}
                        </p>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full bg-[#1a2332] hover:bg-[#2a3342] text-white h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Get Started'
                        )}
                      </Button>

                      <p className="text-xs text-gray-400 text-center pt-2">
                        By submitting, you agree to our Terms of Service and
                        Privacy Policy
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
