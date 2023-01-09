import { Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, ArcElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, ArcElement);

const PurchaseGoal = ({ data }: { data: Widget[] }) => {
  const purchases: number[] = data.map((item) => item.purchases);
  const sum: number = purchases.reduce((a, b) => a + b, 0);
  const goal: number = 1000;
  const progress = goal - sum <= 0 ? 0 : goal - sum;
  const chartData: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  } = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: [sum, progress],
        backgroundColor: ["#36A3EB", "#90C7EB"],
      },
    ],
  };

  return (
    <div className="flex flex-col justify-start items-center w-[75vw] sm:w-[25vw]">
      <Doughnut data={chartData} className="mb-2 sm:mb-4" />
      <p>Purchase Goal Progress</p>
      <p className="font-light">X / 1000 purchases</p>
      <p>{`${Math.round((sum / goal) * 100)}%`}</p>
    </div>
  );
};

export default PurchaseGoal;
