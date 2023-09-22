import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

function LineChart02({ width, height }: { width: number; height: number }) {
  const dummyData = [
    {
      date: "2023-09-02",
      amount: 961,
    },
    {
      date: "2023-09-16",
      amount: 752,
    },
    {
      date: "2023-09-05",
      amount: 511,
    },
    {
      date: "2023-09-03",
      amount: 222,
    },
    {
      date: "2023-09-08",
      amount: 243,
    },
    {
      date: "2023-09-10",
      amount: 768,
    },
    {
      date: "2023-09-12",
      amount: 210,
    },
    {
      date: "2023-09-25",
      amount: 170,
    },
    {
      date: "2023-09-09",
      amount: 894,
    },
    {
      date: "2023-09-28",
      amount: 757,
    },
    {
      date: "2023-09-18",
      amount: 982,
    },
    {
      date: "2023-09-15",
      amount: 946,
    },
    {
      date: "2023-09-23",
      amount: 892,
    },
    {
      date: "2023-09-17",
      amount: 856,
    },
    {
      date: "2023-09-05",
      amount: 747,
    },
    {
      date: "2023-09-13",
      amount: 972,
    },
    {
      date: "2023-09-11",
      amount: 622,
    },
    {
      date: "2023-09-05",
      amount: 631,
    },
    {
      date: "2023-09-05",
      amount: 143,
    },
    {
      date: "2023-09-17",
      amount: 724,
    },
    {
      date: "2023-09-28",
      amount: 522,
    },
    {
      date: "2023-09-29",
      amount: 899,
    },
    {
      date: "2023-09-27",
      amount: 453,
    },
    {
      date: "2023-09-29",
      amount: 711,
    },
    {
      date: "2023-09-28",
      amount: 514,
    },
    {
      date: "2023-09-18",
      amount: 239,
    },
    {
      date: "2023-09-11",
      amount: 557,
    },
    {
      date: "2023-09-08",
      amount: 603,
    },
    {
      date: "2023-09-11",
      amount: 239,
    },
    {
      date: "2023-09-21",
      amount: 172,
    },
    {
      date: "2023-09-24",
      amount: 813,
    },
    {
      date: "2023-09-08",
      amount: 831,
    },
    {
      date: "2023-09-27",
      amount: 316,
    },
    {
      date: "2023-09-17",
      amount: 641,
    },
    {
      date: "2023-09-18",
      amount: 1062,
    },
    {
      date: "2023-09-14",
      amount: 366,
    },
    {
      date: "2023-09-20",
      amount: 137,
    },
    {
      date: "2023-09-13",
      amount: 584,
    },
    {
      date: "2023-09-04",
      amount: 1008,
    },
    {
      date: "2023-09-07",
      amount: 912,
    },
    {
      date: "2023-09-04",
      amount: 123,
    },
    {
      date: "2023-09-08",
      amount: 1049,
    },
    {
      date: "2023-09-05",
      amount: 983,
    },
    {
      date: "2023-09-12",
      amount: 413,
    },
    {
      date: "2023-09-21",
      amount: 611,
    },
    {
      date: "2023-09-28",
      amount: 889,
    },
    {
      date: "2023-09-16",
      amount: 928,
    },
    {
      date: "2023-09-01",
      amount: 750,
    },
    {
      date: "2023-09-26",
      amount: 488,
    },
    {
      date: "2023-09-11",
      amount: 625,
    },
    {
      date: "2023-09-02",
      amount: 132,
    },
    {
      date: "2023-09-16",
      amount: 151,
    },
    {
      date: "2023-09-29",
      amount: 929,
    },
    {
      date: "2023-09-11",
      amount: 618,
    },
    {
      date: "2023-09-17",
      amount: 570,
    },
    {
      date: "2023-09-18",
      amount: 688,
    },
    {
      date: "2023-09-27",
      amount: 197,
    },
    {
      date: "2023-09-12",
      amount: 754,
    },
    {
      date: "2023-09-03",
      amount: 909,
    },
    {
      date: "2023-09-29",
      amount: 437,
    },
    {
      date: "2023-09-06",
      amount: 100,
    },
    {
      date: "2023-09-07",
      amount: 344,
    },
    {
      date: "2023-09-15",
      amount: 371,
    },
    {
      date: "2023-09-08",
      amount: 102,
    },
    {
      date: "2023-09-14",
      amount: 277,
    },
    {
      date: "2023-09-06",
      amount: 805,
    },
    {
      date: "2023-09-28",
      amount: 746,
    },
    {
      date: "2023-09-24",
      amount: 865,
    },
    {
      date: "2023-09-03",
      amount: 191,
    },
    {
      date: "2023-09-03",
      amount: 261,
    },
    {
      date: "2023-09-02",
      amount: 571,
    },
    {
      date: "2023-09-03",
      amount: 628,
    },
    {
      date: "2023-09-01",
      amount: 537,
    },
    {
      date: "2023-09-21",
      amount: 316,
    },
    {
      date: "2023-09-19",
      amount: 395,
    },
    {
      date: "2023-09-13",
      amount: 791,
    },
    {
      date: "2023-09-28",
      amount: 969,
    },
    {
      date: "2023-09-14",
      amount: 887,
    },
    {
      date: "2023-09-24",
      amount: 834,
    },
    {
      date: "2023-09-29",
      amount: 424,
    },
    {
      date: "2023-09-04",
      amount: 298,
    },
    {
      date: "2023-09-22",
      amount: 778,
    },
    {
      date: "2023-09-27",
      amount: 451,
    },
    {
      date: "2023-09-09",
      amount: 286,
    },
    {
      date: "2023-09-18",
      amount: 734,
    },
    {
      date: "2023-09-12",
      amount: 600,
    },
    {
      date: "2023-09-16",
      amount: 555,
    },
    {
      date: "2023-09-18",
      amount: 269,
    },
    {
      date: "2023-09-08",
      amount: 874,
    },
    {
      date: "2023-09-10",
      amount: 834,
    },
    {
      date: "2023-09-22",
      amount: 1002,
    },
    {
      date: "2023-09-24",
      amount: 832,
    },
    {
      date: "2023-09-18",
      amount: 334,
    },
    {
      date: "2023-09-26",
      amount: 590,
    },
    {
      date: "2023-09-11",
      amount: 488,
    },
    {
      date: "2023-09-24",
      amount: 306,
    },
    {
      date: "2023-09-13",
      amount: 210,
    },
    {
      date: "2023-09-29",
      amount: 567,
    },
    {
      date: "2023-09-10",
      amount: 241,
    },
    {
      date: "2023-09-19",
      amount: 419,
    },
  ];

  const series = [
    {
      name: "Payment Amount",
      data: dummyData.map((transaction) => transaction.amount),
    },
  ];

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const options: any = { month: "short", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Extract the month and day parts and convert them to title case
    const [month, day] = formattedDate.split(" ");
    const formattedMonth =
      month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    return formattedMonth + " " + day;
  }
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
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
      categories: dummyData.map((transaction) =>
        formatDate(transaction.date).toString()
      ),
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
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={height}
        />
      </div>
    </>
  );
}

export default LineChart02;
