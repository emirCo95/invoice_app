'use client';

import { SyntheticEvent, useState, startTransition } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import SubmitButton from '@/components/SubmitButton';

import { createAction } from '@/app/actions';

export default function NewInvoice() {
  const [state, setState] = useState('ready');

  async function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (state === 'pending') return;
    setState('pending');
    const target = event.target as HTMLFormElement;
    startTransition(async () => {
      const formData = new FormData(target);
      await createAction(formData);
    });
  }

  return (
    <main className="flex flex-col justify-center h-full max-w-5xl mx-auto gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form
        action={createAction}
        onSubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div className="">
          <Label className="block mb-2 font-semibold text-sm" htmlFor="name">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div className="">
          <Label className="block mb-2 font-semibold text-sm" htmlFor="email">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="">
          <Label className="block mb-2 font-semibold text-sm" htmlFor="value">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div className="">
          <Label
            className="block mb-2 font-semibold text-sm"
            htmlFor="description"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div className="">
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}
