import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function ChartSection({ data }) {
  
  const expenseData = data.filter(d => d.type === "expense");

  const COLORS = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6"];

 return (
  <div className="grid md:grid-cols-2 gap-6 mt-8">

    {/* Line Chart */}
    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
      <h3 className="font-semibold mb-3">Balance Trend</h3>

      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#6366f1" />
      </LineChart>
    </div>

    {/* Pie Chart */}
    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
      <h3 className="font-semibold mb-3">Spending Breakdown</h3>

      <PieChart width={350} height={250}>
        <Pie
          data={expenseData}
          dataKey="amount"
          nameKey="category"
          outerRadius={90}
        >
          {expenseData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>

  </div>
);
}