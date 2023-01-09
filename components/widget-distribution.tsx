import { Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

// Chart plugins require registration
Chart.register(CategoryScale, LinearScale, BarElement);

const WidgetDistribution = ({ data }: { data: Widget[] }) => {
  const purchases: number[] = data.map((item) => item.purchases);
  const sum: number = purchases.reduce((a, b) => a + b, 0);
  // using inline arbitrary values was not rendering, so I broke it out in a separate array
  const bgColors: string[] = [
    "bg-[#FF6384]",
    "bg-[#36A3EB]",
    "bg-[#FFCC56]",
    "bg-[#4BC0C0]",
  ];
  // structuring data for chartjs charts
  const chartData: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  } = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => (item.purchases / sum) * 100),
        backgroundColor: ["#FF6384", "#36A3EB", "#FFCC56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center w-[75vw] sm:w-[25vw]">
      <Pie data={chartData} className="mb-4" />
      <p>Purchase Goal Progress</p>
      <p className="font-light mb-4">X / 1000 purchases</p>
      <table className="table-auto w-full">
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td
                  className={`border border-black text-center text-white p-2 ${bgColors[index]}`}
                >
                  {`${Math.round((item.purchases / sum) * 100)}%`}
                </td>
                <td className="border border-black text-center p-2">
                  {item.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetDistribution;
