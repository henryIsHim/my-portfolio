// app/contact/page.jsx
'use client';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <button type="submit">Send</button>
    </form>
  );
}