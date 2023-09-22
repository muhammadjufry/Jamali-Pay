import React from 'react';

function WelcomeBanner() {
  return (
    <div className="bg-indigo-200 dark:bg-indigo-500 py-4 sm:py-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, Muhammad Jufry. 👋</h1>
        <p className="dark:text-indigo-200">Here is what’s happening with your company today:</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
