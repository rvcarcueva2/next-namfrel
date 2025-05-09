import PowerBIWrapper from '../components/PowerBIWrapper';

export default function ElectionStatisticsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#1e0775] my-6">
        <h1 className="text-4xl font-bold mb-2">Election Statistics</h1>
        <p className="text-sm font-light">
          Results as of 2:47 PM – May 13, 2022
        </p>
        <p className="text-xs mt-1">
          This is a PARTIAL and UNOFFICIAL results for the 2025 Philippine Midterm Elections. Current results may need to be refreshed for a live update.
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8"> {/* 👈 Add margin-bottom here */}
        <div className="w-full h-[90vh] rounded-lg shadow overflow-hidden">
          <PowerBIWrapper
            
            desktopUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=2f78a2a80a9a20475bb3"
            mobileUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=6beb70a9101427a2a6ec" 
            reportId={''} accessToken={''}          />
        </div>
      </div>
    </main>
  );
}