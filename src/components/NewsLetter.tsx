'use client';

import { Button, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NewsLetterFormSchema, NewsLetterSchema } from './project/Footer';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

const NewsLetter = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsLetterFormSchema>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsLetterFormSchema) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_5railuc',
        'template_sumtok9',
        {
          from_name: 'Newsletter Subscriber From Apps Site',
          to_name: 'Hemanth Babu S',
          from_email: data.email,
          to_email: 'hemanth170648@gmail.com',
          message: 'I would like to subscribe to the newsletter.',
          via: 'From Blogs Site',
          subscribed: 'Yes',
        },
        'Zm3b55iaafc6m07VZ'
      );
      alert('Thank you. You have successfully subscribed to the newsletter.');
      reset();
    } catch (err) {

      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-primary-light-blue-200 m-2 rounded-xl p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-base mb-1">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-100 mb-3">
          Opt-in to receive updates and news about the sidebar.
        </p>
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextInput
          {...control.register('email')}
          error={errors.email ? errors.email.message : null}
          placeholder="Enter your email"
          type="email"
          required
          className="flex-1"
          size="sm"
          id='email'
        />
        <Button type="submit" size="sm" fullWidth disabled={loading} loading={loading}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
