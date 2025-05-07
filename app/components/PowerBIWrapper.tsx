'use client';

import dynamic from 'next/dynamic';

const PowerBIViewer = dynamic(() => import('./PowerBIViewer'), { ssr: false });

interface Props {
  reportId: string;
  embedUrl: string;
}

export default function PowerBIWrapper(props: Props) {
    return <PowerBIViewer accessToken={''} {...props} />;
}
