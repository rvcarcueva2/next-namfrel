'use client';
import { useEffect, useState } from 'react';

interface PowerBIEmbedProps {
  mobileUrl: string;
  desktopUrl: string;
  title?: string;
  className?: string;
}

export default function PowerBIEmbed({
  mobileUrl,
  desktopUrl,
  title = 'Power BI Dashboard',
  className = '',
}: PowerBIEmbedProps) {
  const [embedUrl, setEmbedUrl] = useState('');

  const getIsMobile = () => window.innerWidth <= 768;

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
    <iframe
      title={title}
      src={embedUrl}
      allowFullScreen
      className={`w-full h-full border-0 ${className}`}
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    ></iframe>
  );
}