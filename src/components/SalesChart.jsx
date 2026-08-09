import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {
  const data = {
    labels: ["Products", "Users", "Orders", "Revenue"],
    datasets: [
      {
        label: "NStyle Analytics",
        data: [12, 8, 15, 25000],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#8B5CF6",
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        📊 Dashboard Analytics
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default SalesChart;