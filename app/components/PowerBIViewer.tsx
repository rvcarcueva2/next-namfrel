'use client';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

interface Props {
  reportId: string;
  embedUrl: string;
  accessToken: string;
}

export default function PowerBIViewer({ reportId, embedUrl, accessToken }: Props) {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',
        id: reportId,
        embedUrl,
        tokenType: models.TokenType.Embed,
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
