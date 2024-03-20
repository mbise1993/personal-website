'use client';

import React from 'react';

export default function Page() {
  const [showIntroOverlay, setShowIntroOverlay] = React.useState(false);

  return showIntroOverlay ? (
    <div className="intro-overlay"></div>
  ) : (
    <div>
      <h1>WELCOME TO MATTBISE.COM</h1>
    </div>
  );
}
