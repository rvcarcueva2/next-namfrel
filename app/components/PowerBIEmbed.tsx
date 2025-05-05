'use client';

import { useEffect, useRef } from 'react';
import {
  models,
  IEmbedConfiguration,
  factories,
  service,
  Report,
} from 'powerbi-client';

interface PowerBIEmbedProps {
  embedUrl: string;
  accessToken: string;
  reportId: string;
  pageName?: string;
}

export default function PowerBIEmbedComponent({
  embedUrl,
  accessToken,
  reportId,
  pageName = 'ReportSection1',
}: PowerBIEmbedProps) {
  const embedContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedContainer.current) return;

    const embedConfig: IEmbedConfiguration = {
      type: 'report',
      id: reportId,
      embedUrl,
      accessToken,
      tokenType: models.TokenType.Embed,
      settings: {
        panes: {
          filters: { visible: false },
          pageNavigation: { visible: false }, // 👈 This hides the bottom navigation tabs
        },
        layoutType: models.LayoutType.Custom,
        customLayout: {
          displayOption: models.DisplayOption.FitToPage,
        },
      },
    };

    const powerbiService = new service.Service(
      factories.hpmFactory,
      factories.wpmpFactory,
      factories.routerFactory
    );

    powerbiService.reset(embedContainer.current);

    const report = powerbiService.embed(
      embedContainer.current,
      embedConfig
    ) as Report;

    report.on('loaded', async () => {
      try {
        const pages = await report.getPages();
        const targetPage = pages.find((p) => p.name === pageName);
        if (targetPage) {
          await targetPage.setActive();
        }
      } catch (err) {
        console.error('Failed to set page:', err);
      }
    });
  }, [embedUrl, accessToken, reportId, pageName]);

  return (
    <div
      ref={embedContainer}
      style={{
        height: '800px',
        width: '100%',
        transform: 'scale(0.97)',
        transformOrigin: 'top center',
        marginBottom: '2rem', //
      }}
    />
  );
}
