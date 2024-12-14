import { sql } from 'drizzle-orm';

import { db } from '@/db';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default async function NewInvoice() {
  const results = await db.execute(sql`SELECT current_database()`);

  console.log('results', results);

  return (
    <main className="flex flex-col justify-center h-full max-w-5xl mx-auto gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form className="grid gap-4 max-w-xs" action="">
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
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
