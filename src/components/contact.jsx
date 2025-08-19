import React, { useState } from 'react';
import ScrollTop from './scroll_top';
import Footer from './footer';
import NavBar2 from './nav2';

const NewCard = ({ imgSrc, title, desc }) => (
  <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
    <img src={imgSrc} width="60" height="60" alt="features" className="rounded-full" />
    <div className="flex-1">
      <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Faq = ({ question1, answer1, question2, answer2, question3, answer3 }) => (
  <section className="bg-yellow-500 p-10">
    <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
    <div className="max-w-3xl mx-auto space-y-4">
      {[{ q: question1, a: answer1 }, { q: question2, a: answer2 }, { q: question3, a: answer3 }].map((faq, i) => (
        <details key={i} className="bg-white rounded-md p-4 shadow-md">
          <summary className="cursor-pointer font-semibold text-gray-800">
            {faq.q}
          </summary>
          <p className="text-sm text-gray-600 mt-2">{faq.a}</p>
        </details>
      ))}
    </div>
  </section>
);

const Card = ({ imgSrc, name }) => (
  <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
    <img
      src={imgSrc}
      alt="team member"
      className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-yellow-500 mb-4 object-cover"
    />
    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error(await response.json());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar2/>

      

      <section className='bg-yellow-500 py-12 px-4 mt-20'>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>

          {['fullName', 'email', 'phone', 'city'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/, ' $1')}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={field}
                name={field}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-500"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </section>

      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Royale Cleaners customer support 7 days/week</h2>
            <h3 className="text-xl">Always ready to help</h3>
            <NewCard
              imgSrc='/assets/svg/phone.svg'
              title="VIA PHONE"
              desc="Call us at +44 7349 791131 from 8 am - 6 pm (Mon-Sun)."
            />
            <NewCard
              imgSrc='/assets/svg/email.svg'
              title="VIA EMAIL"
              desc="Send an email to  info@royalecleaners.co.uk — available 24/7."
            />
            <NewCard
              imgSrc='/assets/svg/chat.svg'
              title="VIA CHAT"
              desc="Chat with us on our website from 8 am - 6 pm (Mon-Sun)."
            />
          </div>
        </div>
      </section>

      <Faq
        question1="How does the 100% satisfaction guarantee work?"
        answer1="If you're not satisfied after the service, contact us within 24 hours for a correction cleaning, discount, or refund."
        question2="Is every cleaner a female?"
        answer2="No. Both male and female cleaners work with us to provide excellent service."
        question3="What if I need to cancel the cleaning?"
        answer3="Contact support at least 48 hours before the cleaning to receive a full refund."
      />

      <ScrollTop />
      <Footer />
    </>
  );
}

export default Contact;