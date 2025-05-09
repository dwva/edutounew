import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
          <p>We value your privacy and data security. Any information provided during registration will be used only for communication and workshop-related activities.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
          <p>We do not share, sell, or distribute your personal data to third parties.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Content Usage</h2>
          <p>Workshop recordings, screenshots, or shared content may be used for internal learning purposes but will not be made public without prior consent.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Analytics</h2>
          <p>We may use aggregated and anonymized data for improving future workshops.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
