import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoiceId = parseInt(params.invoiceId);

  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  console.log(result);

  return (
    <main className="flex flex-col justify-center h-screen text-center max-w-5xl mx-auto gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoice # {invoiceId}</h1>
        <p></p>
      </div>
    </main>
  );
}
