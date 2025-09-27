'use client'

import { ArrowRight, CheckCircle, MessageCircle, Shield } from 'lucide-react'
import React, { useState } from 'react'

const benefits = [
  {
    title: 'Quick Pre-Approval',
    description: 'Get pre-approved in 5 minutes',
    icon: CheckCircle
  },
  {
    title: 'Compare Best Rates',
    description: '15+ banks competing for you',
    icon: CheckCircle
  },
  {
    title: 'Zero Hidden Charges',
    description: 'Complete transparency',
    icon: CheckCircle
  },
  {
    title: 'Expert Guidance',
    description: 'Personal loan advisor',
    icon: CheckCircle
  }
]

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    studyDestination: '',
    course: '',
    university: '',
    loanAmount: '',
    familyIncome: '',
    additionalInfo: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <>
     

      <section className="bg-section dark:bg-darklight pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 pt-[28px]">
            <h1 className="text-4xl md:text-5xl font-bold text-midnight_text dark:text-white">
              Apply for Your{' '}
              <span className="text-transparent bg-clip-text bg-blue-500">
                Education Loan
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-white/70 max-w-2xl mx-auto">
              Take the first step towards your education dreams. Get pre-approved
              in minutes.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-darkmode rounded-xl shadow-lg p-8">
                {/* Security Info */}
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600 dark:text-white/50">
                    🔒 Your information is 100% secure
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange('fullName', e.target.value)
                        }
                        required
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange('phoneNumber', e.target.value)
                        }
                        required
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      required
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Study Destination *
                      </label>
                      <select
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                        value={formData.studyDestination}
                        onChange={(e) =>
                          handleInputChange('studyDestination', e.target.value)
                        }
                        required
                      >
                        <option value="">Select country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="india">India</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Course/Program *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MS Computer Science"
                        value={formData.course}
                        onChange={(e) =>
                          handleInputChange('course', e.target.value)
                        }
                        required
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                      University/Institution
                    </label>
                    <input
                      type="text"
                      placeholder="Enter university name (if known)"
                      value={formData.university}
                      onChange={(e) =>
                        handleInputChange('university', e.target.value)
                      }
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Loan Amount Needed *
                      </label>
                      <select
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                        value={formData.loanAmount}
                        onChange={(e) =>
                          handleInputChange('loanAmount', e.target.value)
                        }
                        required
                      >
                        <option value="">Select amount</option>
                        <option value="10-20">₹10-20 Lakhs</option>
                        <option value="20-40">₹20-40 Lakhs</option>
                        <option value="40-60">₹40-60 Lakhs</option>
                        <option value="60-80">₹60-80 Lakhs</option>
                        <option value="80+">₹80+ Lakhs</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                        Family Income (Annual)
                      </label>
                      <select
                        className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                        value={formData.familyIncome}
                        onChange={(e) =>
                          handleInputChange('familyIncome', e.target.value)
                        }
                      >
                        <option value="">Select income range</option>
                        <option value="5-10">₹5-10 Lakhs</option>
                        <option value="10-20">₹10-20 Lakhs</option>
                        <option value="20-40">₹20-40 Lakhs</option>
                        <option value="40+">₹40+ Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-white/70">
                      Additional Information
                    </label>
                    <textarea
                      placeholder="Tell us about your academic background, admission status, or any specific requirements..."
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        handleInputChange('additionalInfo', e.target.value)
                      }
                      rows={4}
                      className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-darklight dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold flex justify-center items-center hover:opacity-90 transition"
                  >
                    Check My Eligibility
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-500 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">Why Apply Through Astrum?</h3>
                <div className="space-y-4">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1" />
                      <div>
                        <div className="font-medium">{b.title}</div>
                        <div className="text-sm opacity-90">{b.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-darkmode rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4">Need Help? We're Here!</h3>
                <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
                  Have questions about the application process? Our loan experts are ready to help.
                </p>
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}
