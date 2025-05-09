'use client';
import { useEffect, useState } from 'react';
import PowerBIWrapper from '../components/PowerBIWrapper';

export default function SenatePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#11349C] my-6">
        <h1 className="text-4xl font-bold mb-2">Senatorial Race</h1>
        <p className="text-sm font-light">
          Results as of 2:47 PM – May 13, 2022
        </p>
        <p className="text-sm md:px-4 mt-1">
          This is a PARTIAL and UNOFFICIAL result for the 2025 Philippine Midterm Elections. Current results may need to be refreshed for a live update.
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8"> 
        <div className="w-full h-full rounded-lg shadow overflow-hidden">
          <PowerBIWrapper
            
            desktopUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=3a4aded5c1db1eceb3ae&filterPaneEnabled=false"
            mobileUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=e1068efd56548ea983c7" 
            reportId={''} accessToken={''}          />
        </div>
      </div>
    </main>
  );
}