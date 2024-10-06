export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Ordering</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">How do I place an order?</h3>
              <p>Browse our products, add items to your cart, and proceed to checkout. Follow the steps to complete your purchase.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Can I modify or cancel my order?</h3>
              <p>You can modify or cancel your order within 1 hour of placing it. Contact our customer service for assistance.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Shipping</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">How long will it take to receive my order?</h3>
              <p>Shipping times vary depending on your location and chosen shipping method. Standard shipping usually takes 5-7 business days.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Do you offer international shipping?</h3>
              <p>Yes, we ship to select countries. International shipping times and costs vary.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Returns and Refunds</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">What is your return policy?</h3>
              <p>We offer a 30-day return policy for most items. Please see our Returns page for more details.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">How long does it take to process a refund?</h3>
              <p>Once we receive and inspect the returned item, refunds are usually processed within 3-5 business days.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}