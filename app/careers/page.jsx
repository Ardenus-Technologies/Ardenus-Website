'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, GraduationCap, Briefcase, ChevronRight, X } from 'lucide-react'

export default function Careers() {
  const [applyFormOpen, setApplyFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    graduationYear: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Use FormData to send file as multipart upload
      const submitData = new FormData()
      submitData.append('firstName', formData.firstName)
      submitData.append('lastName', formData.lastName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone || '')
      submitData.append('school', formData.school)
      submitData.append('graduationYear', formData.graduationYear)
      submitData.append('linkedin', formData.linkedin || '')
      submitData.append('portfolio', formData.portfolio || '')
      submitData.append('coverLetter', formData.coverLetter)
      submitData.append('submittedAt', new Date().toISOString())
      submitData.append('position', 'AI Engineer Intern')

      if (formData.resume) {
        submitData.append('resume', formData.resume)
      }

      // Send form data to n8n webhook
      const response = await fetch('https://backendflows.app.n8n.cloud/webhook/16ee34e6-6800-4a8d-aa12-72fd758f7217', {
        method: 'POST',
        body: submitData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSubmitSuccess(true)

      // Reset form after delay
      setTimeout(() => {
        setApplyFormOpen(false)
        setSubmitSuccess(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          school: '',
          graduationYear: '',
          linkedin: '',
          portfolio: '',
          resume: null,
          coverLetter: '',
        })
      }, 2000)
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#122b3e] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
            style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
          >
            Careers
          </h1>
          <p
            className="text-xl text-white/80 font-light max-w-2xl"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            Join our team and help shape the future
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1a2332] mb-2">
            Open Positions
          </h2>
          <p className="text-gray-600 font-light mb-12">
            Explore opportunities to grow with us
          </p>

          {/* Job Card */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#122b3e]/30 transition-colors">
            {/* Job Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#122b3e] mb-2">
                    AI Engineer Intern
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" strokeWidth={1.5} />
                      Remote
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" strokeWidth={1.5} />
                      Part-time / Flexible
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                      Internship
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setApplyFormOpen(true)}
                  className="bg-[#122b3e] text-white rounded-none px-8 py-3 text-sm font-light hover:bg-[#1a3a50] transition-colors flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                </Button>
              </div>
            </div>

            {/* Job Details */}
            <div className="px-8 py-8">
              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-[#1a2332] mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#122b3e]" strokeWidth={1.5} />
                  Job Overview
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We're looking for a hungry, motivated college student who is eager to dive into the world of Machine Learning and AI automation development. This is an exceptional opportunity to gain hands-on experience building real-world AI solutions while working alongside experienced engineers.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  As an AI Engineer Intern, you'll contribute to developing intelligent automation systems that help businesses transform their operations. You'll learn cutting-edge technologies, work on meaningful projects, and have the opportunity to make a real impact from day one.
                </p>
              </div>

              {/* What You'll Do */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-[#1a2332] mb-4">
                  What You'll Do
                </h4>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Assist in developing and training machine learning models for various business applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Build and optimize AI-powered automation workflows and integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Work with data pipelines, APIs, and cloud infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborate with the team to research and implement new AI technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Document processes, create technical specifications, and contribute to knowledge sharing</span>
                  </li>
                </ul>
              </div>

              {/* What We're Looking For */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-[#1a2332] mb-4">
                  What We're Looking For
                </h4>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Currently enrolled in a Bachelor's or Master's program in Computer Science, Data Science, or related field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strong foundation in Python and familiarity with ML frameworks (TensorFlow, PyTorch, or similar)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Genuine curiosity and passion for AI, automation, and emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Self-starter mentality with strong problem-solving skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Excellent communication skills and ability to work in a fast-paced environment</span>
                  </li>
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-[#1a2332] mb-4">
                  Nice to Have
                </h4>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e]/50 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Experience with LLMs, prompt engineering, or AI agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e]/50 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Familiarity with cloud platforms (AWS, GCP, or Azure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e]/50 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Personal projects or contributions to open-source AI projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#122b3e]/50 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Experience with workflow automation tools (n8n, Zapier, Make)</span>
                  </li>
                </ul>
              </div>

              {/* What You'll Gain */}
              <div className="bg-[#122b3e]/5 rounded-lg p-6">
                <h4 className="text-lg font-medium text-[#1a2332] mb-4">
                  What You'll Gain
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600 font-light">
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Real-world experience building production AI systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Mentorship from experienced AI engineers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Flexible remote work schedule</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Potential for full-time conversion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Exposure to cutting-edge AI technologies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#122b3e] font-medium">→</span>
                    <span>Portfolio-worthy projects to showcase</span>
                  </div>
                </div>
              </div>

              {/* Apply CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 font-light">
                  Ready to kickstart your AI career?
                </p>
                <Button
                  onClick={() => setApplyFormOpen(true)}
                  className="bg-[#122b3e] text-white rounded-none px-10 py-3 text-sm font-light hover:bg-[#1a3a50] transition-colors flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {applyFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setApplyFormOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 rounded-lg shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-[#122b3e] px-8 py-6 flex items-center justify-between">
              <div>
                <h3
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: 'UAV-OSD-Sans-Mono, monospace' }}
                >
                  Apply for AI Engineer Intern
                </h3>
                <p className="text-white/70 text-sm font-light mt-1">
                  Fill out the form below to submit your application
                </p>
              </div>
              <button
                onClick={() => setApplyFormOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-[#1a2332] mb-2">Application Submitted!</h4>
                  <p className="text-gray-600 font-light">We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <>
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="john@university.edu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Education Fields */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        School / University <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="University of Example"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        Expected Graduation Year <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light bg-white"
                      >
                        <option value="">Select year</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a2332] mb-2">
                        Portfolio / GitHub
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light"
                        placeholder="https://github.com/johndoe"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#1a2332] mb-2">
                      Resume / CV <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#122b3e]/50 transition-colors">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        {formData.resume ? (
                          <div className="text-[#122b3e]">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-light">{formData.resume.name}</span>
                          </div>
                        ) : (
                          <div className="text-gray-500">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="font-light">Click to upload PDF, DOC, or DOCX</span>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#1a2332] mb-2">
                      Why do you want to join Ardenus? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#122b3e] transition-colors font-light resize-none"
                      placeholder="Tell us about your interest in AI, relevant experience, and what excites you about this opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#122b3e] text-white rounded-none px-8 py-4 text-base font-light hover:bg-[#1a3a50] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
