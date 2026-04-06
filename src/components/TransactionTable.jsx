export default function TransactionTable({ data }) {
  if (data.length === 0) {
    return (
      <p className="mt-6 text-center text-gray-500">
        No transactions found
      </p>
    );
  }

  return (
    <div className="mt-8 bg-white p-5 rounded-xl shadow border border-gray-100">
      <h3 className="font-semibold mb-4 text-lg">Transactions</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600 text-sm">
              <th className="py-3">Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {data.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3">{t.date}</td>

                <td className="font-medium">₹ {t.amount}</td>

                <td>
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                    {t.category}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-2 py-1 rounded-md text-sm ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}