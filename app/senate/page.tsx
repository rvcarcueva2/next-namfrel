'use client';
import { useEffect, useState } from 'react';

export default function SenatePage() {
  const mobileUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=e1068efd56548ea983c7';
  const desktopUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=3a4aded5c1db1eceb3ae';

  const getIsMobile = () => window.innerWidth <= 768;
  const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    setEmbedUrl(getIsMobile() ? mobileUrl : desktopUrl);

    const handleResize = () => {
      const newUrl = getIsMobile() ? mobileUrl : desktopUrl;
      setEmbedUrl(prevUrl => (prevUrl !== newUrl ? newUrl : prevUrl));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!embedUrl) return null;

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#00397A] my-6">
        <h1 className="text-4xl font-bold mb-2">Senatorial Race</h1>
        <p className="text-sm font-light">
          Results as of 2:47 PM – May 13, 2022
        </p>
        <p className="text-xs mt-1">
          Data refreshes every 15 minutes. Current results may need to be refreshed for a live update.
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8">
        <div className="w-full h-[85vh] rounded-lg shadow overflow-hidden">
          <iframe
            title="Senatorial Race Power BI Dashboard"
            aria-label="Power BI embed showing senatorial race results"
            src={embedUrl}
            allowFullScreen
            className="w-full h-full border-0"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
