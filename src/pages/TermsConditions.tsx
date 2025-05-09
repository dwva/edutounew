import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-3">Workshop Management</h2>
          <p>This workshop is fully managed by students, and no institution is involved in organizing or mandating participation.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Voluntary Participation</h2>
          <p>Participation is voluntary. We do not force any institution or individual to join.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Content & Structure</h2>
          <p>The content is designed to provide practical AI-powered Full Stack Development skills with a hands-on approach.</p>
          <p>The workshop structure, curriculum, and schedule are subject to change at the discretion of the organizers.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Code of Conduct</h2>
          <p>By registering, participants agree to follow the workshop guidelines and maintain a respectful learning environment.</p>
          <p>Misuse of materials, plagiarism, or disruptive behavior will result in immediate removal without a refund.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
