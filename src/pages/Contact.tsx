import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    course: 'none'
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      course: 'none'
    });
  };

  return (
    <div className="min-h-screen w-full bg-white pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl section-heading mb-2 text-gray-900 tracking-tight" style={{ lineHeight: '1.2' }}>CONTACT</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left side - Description and Email */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <p className="text-3xl md:text-4xl hero-heading leading-relaxed text-gray-900">
                  Whether it's to discuss your next project, learn more about our services, or join our team, drop us a line and get the conversati<span className="text-orange-500">on</span> started.
                </p>
              </div>

              <div>
                <div className="inline-block border-2 border-gray-900 rounded-full px-6 py-3 bg-white hover:bg-[#fca311] transition-colors duration-300">
                  <p className="text-base body-text text-gray-900 hover:text-white transition-colors duration-300">edutouskillacademy@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-600 text-base body-text"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Organisation*"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-600 text-base body-text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-600 text-base body-text"
                    />
                  </div>

                  <div>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 text-base body-text appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.5em 1.5em',
                      }}
                    >
                      <option value="none">Role*</option>
                      <option value="student">Student</option>
                      <option value="professional">Professional</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Attach any relevant Deck or Doc"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-600 text-base body-text"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message*"
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-900 focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-600 text-base body-text resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start justify-between pt-4 gap-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 h-5 w-5 rounded border-2 border-gray-900 text-gray-900 focus:ring-0"
                    />
                    <label htmlFor="terms" className="text-sm body-text text-gray-900">
                      By submitting this form you accept our policy as laid out on our{' '}
                      <span className="underline cursor-pointer">T&C's</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center space-x-3 px-6 py-2 bg-white hover:bg-[#fca311] text-gray-900 hover:text-white border-2 border-gray-900 rounded-full font-medium transition-colors duration-300 text-base body-text whitespace-nowrap"
                  >
                    <span className="h-2 w-2 bg-gray-900 hover:bg-white rounded-full transition-colors duration-300"></span>
                    <span className="body-text">Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;