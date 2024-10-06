export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Return Period</h2>
          <p>We offer a 30-day return policy for most items. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Initiate a Return</h2>
          <ol className="list-decimal list-inside ml-4">
            <li>Log into your account and go to your order history.</li>
            <li>Select the item you wish to return and click on "Request Return".</li>
            <li>Fill out the return form, providing a reason for the return.</li>
            <li>Print the provided return label.</li>
            <li>Pack the item securely and attach the return label.</li>
            <li>Drop off the package at your nearest post office or schedule a pickup.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
          <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Exceptions</h2>
          <p>Some items are non-returnable due to hygiene reasons or custom-made products. These will be clearly marked on the product page.</p>
        </section>
      </div>
    </div>
  );
}