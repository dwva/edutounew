const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-3">Payment Terms</h2>
          <p>All payments are final. No refunds will be issued once the registration is confirmed.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Payment Issues</h2>
          <p>We are not responsible for payment failures caused by third-party payment gateways, banking issues, or incorrect user details.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Cancellation</h2>
          <p>If the workshop is canceled by the organizers, participants will be eligible for a full refund, it will be processed/credited within 7-10 business days.</p>
          <p>If a participant is unable to attend due to personal reasons, no refund or rescheduling will be offered.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>This workshop is not affiliated with any institution and is not an officially accredited program.</li>
            <li>The skills taught are practical and industry-focused, but we do not guarantee job placements, internships, or certifications from recognized bodies.</li>
            <li>The organizers are not responsible for any technical issues faced by participants during the workshop.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;