export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Shipping Methods</h2>
          <p>We offer the following shipping methods:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Standard Shipping (5-7 business days)</li>
            <li>Express Shipping (2-3 business days)</li>
            <li>Next Day Delivery (order before 2 PM for next-day delivery)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
          <p>Shipping costs are calculated based on the weight of your order and your location. You can view the exact shipping cost at checkout before completing your purchase.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
          <p>We currently ship to select countries. International shipping times may vary depending on customs processing. Additional fees such as customs and import taxes may apply.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Order Tracking</h2>
          <p>Once your order is shipped, you will receive a confirmation email with a tracking number to monitor your package's progress.</p>
        </section>
      </div>
    </div>
  );
}