import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Scope</h2>
        <p>
          These General Terms and Conditions (GTC) apply to all deliveries from
          Belius Gesellschaft mit beschränkter Haftung (GmbH) to the consumer. A
          consumer is any natural person who enters into a legal transaction for
          purposes that are predominantly neither attributable to their commercial
          nor their independent professional activity.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold bg-yellow-100 p-2">Important Booking Notice</h2>
        <p className="font-semibold text-red-600">
          These vehicles can be booked exclusively via Belius. Direct bookings are excluded.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Contractual Partner</h2>
        <p>
          The purchase contract is concluded with Belius Gesellschaft mit beschränkter
          Haftung (GmbH).
        </p>
        <p><strong>Samuel Bellino</strong></p>
        <p>Seestrasse 18, 8802 Kilchberg</p>
        <p>Commercial Register: Gesellschaft mit beschränkter Haftung</p>
        <p>CHE-485.897.648</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. Prices & Packaging</h2>
        <p>
          The prices that apply are those listed in the offer at the time of the order.
          These are the final prices and include VAT applicable by law in Germany.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. Payment</h2>
        <p>
          Available payment methods include credit card, Amazon Pay, PayPal, Apple Pay,
          and cash payment upon pickup. Specific conditions apply to each method.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">5. Vouchers and Codes</h2>
        <p>No vouchers or codes have been selected.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Cancellation Policy</h2>
        <p>
          You have the right to withdraw from this contract within fourteen days without
          giving any reason. The withdrawal period starts from the day you or a
          designated third party receives the goods.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">7. Late Return Policy</h2>
        <p className="mb-2">
          If you are unable to return the car within the selected rental period, additional charges will apply based on the following rules:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>First 5 minutes beyond the return time will be granted as a grace period (no charge)</li>
          <li>After the initial 5-minute grace period, extra charges will be applied in 5-minute increments</li>
          <li>The extra amount will be calculated according to the vehicle's per-hour rental rate</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">9. Delivery and Delivery Time</h2>
        <p>
          Deliveries are possible abroad. Estimated delivery times depend on the product,
          and customers will be informed in case of changes.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">10. Shipping Costs</h2>
        <p>At Belius, you order free of shipping costs.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">11. Warranty</h2>
        <p>
          The warranty period for new goods is two years. Customers should report any
          material defects immediately upon delivery.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">12. Retention of Title</h2>
        <p>The goods remain the property of Belius GmbH until full payment is received.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">13. Liability</h2>
        <p>
          We are fully liable for intent and gross negligence. For slight negligence,
          liability applies only for injuries to life, body, and health.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
