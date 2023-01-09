import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const PurchaseByWidget = ({ data }: { data: Widget[] }) => {
  const chartData: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  } = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.purchases),
        backgroundColor: ["#FF6384", "#36A3EB", "#FFCC56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="flex flex-col justify-end items-center w-[75vw] sm:w-[30vw]">
      <Bar data={chartData} />
      <p className="mb-4">Purchase Totals by Widget</p>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-black p-2">Widget</th>
            <th className="border border-black p-2"># Purchased</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border border-black text-center p-2">
                  {item.name}
                </td>
                <td className="border border-black text-center p-2">
                  {item.purchases}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseByWidget;
