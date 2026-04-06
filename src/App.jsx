import { useState } from "react";
import { transactions } from "./data/mockData";

import SummaryCard from "./components/SummaryCard";
import ChartSection from "./components/ChartSection";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

function App() {
  const [data, setData] = useState(transactions);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("viewer");
  const [sort, setSort] = useState("latest");

  // calculations
  const income = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  const addTransaction = () => {
  const newTransaction = {
    id: Date.now(),
    date: "2026-04-06",
    amount: 500,
    category: "New",
    type: "expense",
  };

  setData([...data, newTransaction]);
};

  // search filter
const filteredData = data.filter((t) => {
  const searchValue = search.toLowerCase();

  return (
    t.category.toLowerCase().includes(searchValue) ||
    t.type.toLowerCase().includes(searchValue) ||
    t.amount.toString().includes(searchValue)
  );
});

  const sortedData = [...filteredData].sort((a, b) => {
  if (sort === "latest") return new Date(b.date) - new Date(a.date);
  if (sort === "amount") return b.amount - a.amount;
  return 0;
});

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">Finance Dashboard</h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expenses} />
      </div>

      {/* CHARTS */}
      <ChartSection data={data} />

      {/* ROLE SWITCH */}
      <div className="mt-6 flex items-center gap-3">
  <RoleSwitcher role={role} setRole={setRole} />
</div>

      {/* ADMIN BUTTON */}
      {role === "admin" && (
       <button
  onClick={addTransaction}
  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
>
  Add Transaction
</button>
      )}

      {/* SEARCH INPUT */}
      <input
        className="border p-3 mt-6 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search by category, type, or amount..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  className="border p-2 mt-2 rounded"
  onChange={(e) => setSort(e.target.value)}
>
  <option value="latest">Latest</option>
  <option value="amount">Highest Amount</option>
</select>

      {/* TABLE */}
      <TransactionTable data={sortedData} />

      {/* INSIGHTS */}
      <Insights data={data} />

    </div>
  );
}

export default App;