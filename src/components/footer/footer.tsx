"use client";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-10">
      <div className="container-fog">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm uppercase mb-4">Join the Conversation</h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-gray-300 py-2 pr-2 text-sm w-full focus:outline-none"
              />
              <button className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-start md:justify-end space-x-6 items-center">
            <div className="text-sm uppercase">UNITED STATES (USD $)</div>
            <div className="border-l border-gray-300 pl-6 flex space-x-4">
              <a href="#" className="text-sm">CONTACT</a>
              <a href="#" className="text-sm">CLIENT SERVICES</a>
              <a href="#" className="text-sm">LEGAL NOTICES</a>
              <a href="#" className="text-sm">SOCIAL</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
