"use client";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { FormEvent, useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_59wlo9a',
        'template_snkw7wl',
        formRef?.current!,
        'ppoAea4FmlxFFZ3xR'
      )
      .then(() => {
        toast.success('Message sent successfully!', {
          position: 'bottom-right',
          icon: <ShieldCheck className="text-green-500 font-bold" />,
        });
        setMessage(true);
        formRef?.current?.reset();
      })
      .catch(() => {
        toast.error('Failed to send message.', { position: 'bottom-right' });
      });
  };

  return (
    <section className="relative py-20 px-2 max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 animate-fade-in">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Glassmorphic Card */}
        <div className="flex-1 bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-400/30 animate-fade-in">
          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-6">
            <Input
              className="fields focus-visible:ring-2 focus-visible:ring-blue-400"
              type="text"
              placeholder="Your name"
              required
              name="user_name"
            />
            <Input
              className="fields focus-visible:ring-2 focus-visible:ring-blue-400"
              type="email"
              placeholder="hello@gmail.com"
              required
              name="user_email"
            />
            <Textarea
              className="fields focus-visible:ring-2 focus-visible:ring-blue-400"
              placeholder="Your message..."
              rows={6}
              name="message"
              required
            />
            <Button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </Button>
            {message && (
              <div className="flex gap-2 items-center mt-2 animate-fade-in">
                <Image
                  src="/assets/skills/greenTick.svg"
                  alt="Success"
                  height={30}
                  width={30}
                  className="text-green-500"
                />
                <span className="text-green-500">Thanks, I'll reply as soon as possible.</span>
              </div>
            )}
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-6 items-center justify-center animate-fade-in delay-200">
          <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-lg">
            <MdOutlineEmail className="size-8 text-blue-400" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg font-semibold">Mail</p>
              <p className="text-gray-300">jeevanjatavath7@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] [background-size:32px_32px] z-0" />
    </section>
  );
}

