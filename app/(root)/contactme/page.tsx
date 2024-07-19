"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';
import { ShieldCheck } from 'lucide-react';

const ContactMe = () => {

  const formRef=useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(false);

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    emailjs.sendForm(
      'service_59wlo9a',
      'template_snkw7wl',
      formRef?.current!,
      'ppoAea4FmlxFFZ3xR'
    )
    .then((result)=> {
      console.log('result',result);
    })
    .catch((error)=> console.log('error',error));

    toast.success('Message sent successfully.',{
      position:"bottom-right",
      icon:<ShieldCheck className=' text-green-500 font-bold' />,
    })
    setMessage(true);

    formRef?.current?.reset();
  }

  useEffect(()=> {
    if(message) {
      setTimeout(()=> {
        setMessage(false);
      },3000);
    }
  },[message])

  return (
    <div className=' px-2 flex flex-col gap-8 z-40 text-white'>
      <h1 className=' text-4xl text-red-500 z-40'>Contact Me</h1>
      <div className=" px-2 grid grid-cols-2 max-md:grid-cols-1 gap-8 z-40 text-white">
        <div className=' z-40 text-white'>
          <form onSubmit={handleSubmit} ref={formRef} className=' flex flex-col gap-6'>
            <Input
              className='fields focus-visible:ring-offset-0'
              type='text'
              placeholder='Your name'
              required
              name='user_name'
            />
            <Input
              className='fields focus-visible:ring-offset-0'
              type='email'
              placeholder='Hello@gmail.com'
              required
              name='user_email'
            />
            <Textarea
              className='fields focus-visible:ring-offset-0'
              placeholder='Your message...'
              rows={6}
              name='message'
              required
            />
            <Button 
              type='submit' 
              className=' rounded-xl bg-blue-500 hover:bg-white hover:text-black'
            >
              send message
            </Button>
            <div className=''>
              {message && (
                <div className=' flex gap-2 items-center'>
                  <Image
                    src="/assets/skills/greenTick.svg"
                    alt='image'
                    height={30}
                    width={30}
                    className=' text-green-500'
                  />
                  <span className=' text-green-500'>Thanks, I'll reply as soon as possible.</span>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className=' flex flex-col gap-6 mx-auto'>
          <div className=' flex-center flex-col gap-4 p-6 rounded-xl border w-fit hover:bg-gray-950'>
          <MdOutlineEmail className=' size-7 font-normal' />
            <div className=' flex-center flex-col gap-2'>
              <p className=' text-[17px] leading-relaxed font-semibold'>Mail</p>
              <p className=' text-gray-300'>jeevanjatavath7@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;

