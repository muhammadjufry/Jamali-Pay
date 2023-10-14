import React from "react";
import LineChart from "../charts/LineChart";

type Props = {};

function Gross_Volumes_Chart({}: Props) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 border border-l-0 border-t-0 rounded-sm">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Gross Volumes
        </h2>
      </header>
      <LineChart />
    </div>
  );
}

export default Gross_Volumes_Chart;
