import { Button, TextInput } from '@mantine/core';
import React from 'react';

const NewsLetter = () => {
  return (
    <div className="border border-primary-light-blue-200 m-2 rounded-xl p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-base mb-1">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-100 mb-3">
          Opt-in to receive updates and news about the sidebar.
        </p>
      </div>
      <form className="flex flex-col gap-2">
        <TextInput
          placeholder="Enter your email"
          type="email"
          required
          className="flex-1"
          size="sm"
        />
        <Button type="submit" size="sm" fullWidth>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
