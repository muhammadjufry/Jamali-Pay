import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import { ApexOptions } from "apexcharts";
import dummyData from "./DummyData";
function LineChart() {
  const series = [
    {
      name: "Payment Amount",
      data: dummyData.map((transaction) => transaction.amount),
    },
  ];

  function formatDateAndReturnMonthOnly(inputDate: {
    year: number;
    month: number;
    day: number;
  }) {
    if (dummyData.length > 10) {
      // If you have more than 10 data points, only show the month
      const date = new Date(inputDate.year, inputDate.month - 1, inputDate.day);
      const month = date.toLocaleString("default", { month: "long" });
      return month;
    } else {
      // If you have 10 or fewer data points, show month and day
      const date = new Date(inputDate.year, inputDate.month - 1, inputDate.day);
      const month = date.toLocaleString("default", {
        month: "long",
        day: "2-digit",
      });
      return month;
    }
  }
  function formatDate(inputDate: { year: number; month: number; day: number }) {
    const date = new Date(inputDate.year, inputDate.month - 1, inputDate.day);
    const result = date.toLocaleString("default", {
      month: "long",
      day: "2-digit",
    });
    return result;
  }

  // Create an array of unique x-axis labels (months)
  const shortDate = Array.from(
    new Set(
      dummyData.map((transaction) =>
        formatDateAndReturnMonthOnly(transaction.date).toString()
      )
    )
  );
  const longDataDate = dummyData.map((transaction) =>
    formatDate(transaction.date).toString()
  );

  const options: ApexOptions = {
    chart: {
      id: "payment-chart",
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        rotate: 0,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
      overwriteCategories: shortDate,
      categories: longDataDate,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", // Set the curve type to "smooth"
    },
  };

  const totalAmount = dummyData.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  const formattedTotalAmount = totalAmount.toLocaleString();
  const calculateRateConversion = (index: number) => {
    if (index === 0) {
      return ""; // No rate conversion for the first data point
    } else {
      const todayAmount = dummyData[index].amount;
      const yesterdayAmount = dummyData[index - 1].amount;
      const rate = ((todayAmount - yesterdayAmount) / yesterdayAmount) * 100;
      return rate.toFixed(2) + "%";
    }
  };
  return (
    <>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-end">
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
              {`$${formattedTotalAmount}`}
            </div>
            <div
              className={`text-sm font-semibold text-white px-1.5 ${
                calculateRateConversion(dummyData.length - 1).includes("-")
                  ? "bg-amber-500"
                  : "bg-lime-500"
              } rounded-full`}
            >
              {calculateRateConversion(dummyData.length - 1)}
            </div>
          </div>
          <div className="grow ml-2 mb-1"></div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={300}
          />
        )}
      </div>
    </>
  );
}

export default LineChart;
