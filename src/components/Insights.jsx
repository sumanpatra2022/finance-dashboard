export default function Insights({ data }) {
  const expenses = data.filter((t) => t.type === "expense");

  const total = expenses.reduce((sum, t) => sum + t.amount, 0);
  const avgExpense =
  expenses.length > 0 ? total / expenses.length : 0;

  const topCategory =
    expenses.length > 0
      ? expenses.reduce((max, t) =>
          t.amount > max.amount ? t : max
        ).category
      : "N/A";

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h3 className="font-semibold mb-2">Insights</h3>
      <p>Total Expenses: ₹ {total}</p>
      <p>Top Spending Category: {topCategory}</p>
      <p>Average Expense: ₹ {avgExpense.toFixed(0)}</p>
    </div>
  );
}