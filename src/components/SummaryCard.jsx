export default function SummaryCard({ title, amount }) {
  const color =
    title === "Income"
      ? "text-green-500"
      : title === "Expenses"
      ? "text-red-500"
      : "text-blue-500";

  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className={`text-2xl font-bold mt-2 ${color}`}>
        ₹ {amount}
      </p>
    </div>
  );
}