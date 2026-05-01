'use client';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnnvwlyb';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return false;
    }
    // Simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full glass-effect border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg p-4 sm:p-8 space-y-6 mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full px-5 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-base focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 transition placeholder-zinc-400 dark:placeholder-zinc-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="w-full px-5 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-base focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 transition placeholder-zinc-400 dark:placeholder-zinc-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Drop your message here..."
          required
          rows={5}
          maxLength={1000}
          className="w-full px-5 py-4 sm:py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-base focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 transition resize-none placeholder-zinc-400 dark:placeholder-zinc-500"
        />
      </div>
      {error && <div role="alert" className="text-red-400 text-sm font-medium">{error}</div>}
      {status === 'success' && <div role="alert" className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Thank you! Your message has been sent.</div>}
      {status === 'error' && <div role="alert" className="text-red-400 text-sm font-medium">Something went wrong. Please try again later.</div>}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-lg font-semibold rounded-lg shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
} 