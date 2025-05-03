export default function SenatePage() {
  return (
    <main className="h-screen w-screen m-0 p-0 flex flex-col">
      <div className="bg-[#f8f8f8] shadow-md shadow-gray-300 flex justify-center items-center py-6 px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-4 m-2 w-full md:w-auto text-center md:text-left">
          <div className="text-5xl font-bold text-[#00397A] self-start leading-tight">
            Senatorial Race
          </div>
          <div className="flex flex-col text-sm text-[#00397A] md:mt-1">
            <div className="font-light leading-tight">
              Results as of 2:47 PM - May 13, 2022
            </div>
            <div className="text-xs leading-tight mt-1">
              Data refreshes every 15 minutes. Current results may need to be refreshed for a live update.
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-10 mb-10 mx-[20px] md:mx-[80px]">
        <div className="h-full w-full rounded-lg overflow-hidden shadow">
          <iframe
            title="APRIL 30 DASHBOARD"
            width="800"
            height="836"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjAyZjVjNWItNTg0MC00MDg4LWE1MzctNjYzN2U1ZDI1OWIwIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </main>
  );
}
