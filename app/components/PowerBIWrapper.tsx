'use client';

import dynamic from 'next/dynamic';

const PowerBIViewer = dynamic(() => import('./PowerBIViewer'), { ssr: false });

interface Props {
  reportId: string;
  desktopUrl: string;
  mobileUrl: string; // Added mobileUrl as an optional property
  accessToken: string;
};


export default function PowerBIWrapper(props: Props) {
    return <PowerBIViewer {...props} />;
}
