'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        setForm({ name: '', email: '', phone: '', message: '' });
        setShowModal(false);
        router.push('/thank-you'); // ✅ redirect to thank you page
      } else {
        setError('Failed to send message.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Text Block Desktop */}
          <div className="text-left hidden md:block">
            <p className="text-2xl font-semibold mb-1">We're Here to Help! Reach Out for</p>
            <p className="text-2xl font-semibold text-[#026D37]">
              Assistance <span className="text-black">or</span> Inquiries Anytime
              <span className="text-black">.</span>
            </p>
          </div>

          {/* Text Block Mobile */}
          <div className="text-left md:hidden">
            <p className="text-2xl font-semibold mb-1">
              We're Here to Help! Reach Out for{' '}
              <span className="text-[#026D37]">Assistance</span>
            </p>
            <p className="text-2xl font-semibold text-[#026D37]">
              <span className="text-black">or</span> Inquiries Anytime
              <span className="text-black">.</span>
            </p>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#006837] text-white px-8 py-3 rounded-md font-medium text-base transition hover:bg-[#00572c] cursor-pointer"
          >
            Contact us
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="relative z-50 bg-white rounded-lg w-full max-w-md p-6 shadow-lg border border-gray-300 pointer-events-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
              onClick={() => {
                setShowModal(false);
                setError('');
              }}
            >
              ×
            </button>

            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#026D37] text-white w-full py-2 rounded hover:bg-[#02572d] transition cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
