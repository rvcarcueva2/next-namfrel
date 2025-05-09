'use client';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { useEffect, useState } from 'react';

interface Props {
  reportId: string;
  desktopUrl: string;
  mobileUrl: string;
  accessToken: string;
}

export default function PowerBIViewer({ reportId, desktopUrl, mobileUrl, accessToken }: Props) {
  const [selectedEmbedUrl, setSelectedEmbedUrl] = useState(desktopUrl);

  const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    const updateEmbedUrl = () => {
      const isMobile = getIsMobile();
      setSelectedEmbedUrl(isMobile ? mobileUrl : desktopUrl);
    };

    // Set the initial embed URL
    updateEmbedUrl();

    // Update on window resize
    window.addEventListener('resize', updateEmbedUrl);
    return () => window.removeEventListener('resize', updateEmbedUrl);
  }, [desktopUrl, mobileUrl]);

  return (
    <PowerBIEmbed
      key={selectedEmbedUrl} // ✅ forces re-embed when URL changes
      embedConfig={{
        type: 'report',
        id: reportId,
        embedUrl: selectedEmbedUrl,
        tokenType: models.TokenType.Embed,
        accessToken: accessToken,
        settings: {
          panes: {
            filters: { visible: false },
            pageNavigation: { visible: false },
          },
          background: models.BackgroundType.Transparent,
        },
      }}
      cssClassName="w-full h-screen"
    />
  );
}
