import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#8C5E3C] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#E8DEC8]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            Get In Touch
          </div>
          <h2
            id="contact-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20120B] tracking-tight"
          >
            Visit Us or Say Hello
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A2E1B]/80 font-normal">
            Whether you need a table for reading, catering for an event, or our daily bean roast list.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Location Card */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8DEC8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FAF7F2] text-[#8C5E3C] border border-[#E8DEC8]">
                <MapPin className="w-6 h-6 text-[#8C5E3C]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#20120B]">Our Address</h4>
                <p className="text-sm text-[#4A2E1B]/80 mt-1">142 Artisan Boulevard, Central District</p>
                <p className="text-xs text-[#8C5E3C] mt-0.5">Complimentary parking in rear</p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8DEC8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FAF7F2] text-[#8C5E3C] border border-[#E8DEC8]">
                <Clock className="w-6 h-6 text-[#8C5E3C]" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-lg font-bold text-[#20120B]">Opening Hours</h4>
                <div className="mt-2 space-y-1 text-sm text-[#4A2E1B]/80">
                  <div className="flex justify-between">
                    <span className="font-medium text-[#20120B]">Monday – Friday:</span>
                    <span>7:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#20120B]">Saturday – Sunday:</span>
                    <span>8:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+15552345678"
                className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E8DEC8] shadow-xs hover:border-[#C5A059] transition-colors flex items-center gap-3.5 group"
              >
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#8C5E3C] group-hover:bg-[#2C1810] group-hover:text-[#C5A059] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-[#8C5E3C] font-semibold">Phone</p>
                  <p className="text-xs sm:text-sm font-bold text-[#20120B] truncate">+1 (555) 234-5678</p>
                </div>
              </a>

              <a
                href="mailto:hello@bancaffeshop.com"
                className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E8DEC8] shadow-xs hover:border-[#C5A059] transition-colors flex items-center gap-3.5 group"
              >
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#8C5E3C] group-hover:bg-[#2C1810] group-hover:text-[#C5A059] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-[#8C5E3C] font-semibold">Email</p>
                  <p className="text-xs sm:text-sm font-bold text-[#20120B] truncate">hello@bancaffeshop.com</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Note / Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E8DEC8] shadow-md relative">
              <h3 className="font-serif text-2xl font-bold text-[#20120B] mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#8C5E3C]" />
                Send a Message to BAN Caffe Shop
              </h3>
              <p className="text-sm text-[#4A2E1B]/80 mb-6">
                Have a question about our beans, need a private tasting table, or just want to leave feedback?
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#EFE6DD] border border-[#C5A059]/40 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#20120B]">Message Received!</h4>
                  <p className="text-sm text-[#4A2E1B]">
                    Thank you for contacting BAN Caffe Shop. Our barista team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C1810] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]/30 focus:border-[#8C5E3C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2C1810] uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]/30 focus:border-[#8C5E3C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase tracking-wider mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]/30 focus:border-[#8C5E3C]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Coffee Bean Roasts">Coffee Bean Origin & Roasts</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Catering & Pastry Orders">Event Catering & Bulk Pastries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C1810] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]/30 focus:border-[#8C5E3C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#2C1810] text-[#FAF7F2] hover:bg-[#4A2E1B] font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>Send Message to BAN Caffe Shop</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
