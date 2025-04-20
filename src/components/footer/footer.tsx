"use client";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-10">
      <div className="container-fog">
        <div className="flex justify-between items-center">
          <div></div> {/* Empty div to maintain layout */}
          <div className="flex space-x-6 items-center">
            <div className="text-sm uppercase">UNITED KINGDOM (GBP £)</div>
            <div className="border-l border-gray-300 pl-6">
              <a href="#" className="text-sm">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
