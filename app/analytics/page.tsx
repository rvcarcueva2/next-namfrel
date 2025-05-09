import PowerBIWrapper from '../components/PowerBIWrapper';

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#1e0775] my-6">
        <h1 className="text-4xl font-bold mb-2">Analytics and Insights</h1>
        <p className="text-sm font-light">
          Results as of 2:47 PM – May 13, 2022
        </p>
        <p className="text-xs md:px-4 mt-1">
          This is a PARTIAL and UNOFFICIAL results for the 2025 Philippine Midterm Elections. Current results may need to be refreshed for a live update.
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8"> {/* 👈 Add margin-bottom here */}
        <div className="w-full h-[90vh] rounded-lg shadow overflow-hidden">
          <PowerBIWrapper
            
            desktopUrl="https://app.powerbi.com/view?r=eyJrIjoiZDIwODg2MDYtMGRkNC00MThkLWFjNjctOWMzZjJhYmFlYzdjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=7b499ad574a067559754"
            mobileUrl="https://app.powerbi.com/view?r=eyJrIjoiZDIwODg2MDYtMGRkNC00MThkLWFjNjctOWMzZjJhYmFlYzdjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=17775aab90078b52206e" 
            reportId={''} accessToken={''}          />
        </div>
      </div>
    </main>
  );
}