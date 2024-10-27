import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface FinancialData {
  month: string;
  income: number;
  expenses: number;
}

const FinancialReporting: React.FC = () => {
  const [financialData, setFinancialData] = useState<FinancialData[]>([
    { month: 'Jan', income: 1000, expenses: 800 },
    { month: 'Feb', income: 1200, expenses: 900 },
    { month: 'Mar', income: 1100, expenses: 850 },
    { month: 'Apr', income: 1300, expenses: 950 },
  ]);

  const [newEntry, setNewEntry] = useState({ month: '', income: 0, expenses: 0 });

  const addFinancialEntry = () => {
    setFinancialData([...financialData, newEntry]);
    setNewEntry({ month: '', income: 0, expenses: 0 });
  };

  const calculateProfit = () => {
    return financialData.reduce((total, entry) => total + (entry.income - entry.expenses), 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Financial Reporting</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Financial Entry</h3>
        <input
          type="text"
          placeholder="Month"
          className="border p-2 mr-2"
          value={newEntry.month}
          onChange={(e) => setNewEntry({ ...newEntry, month: e.target.value })}
        />
        <input
          type="number"
          placeholder="Income"
          className="border p-2 mr-2"
          value={newEntry.income}
          onChange={(e) => setNewEntry({ ...newEntry, income: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Expenses"
          className="border p-2 mr-2"
          value={newEntry.expenses}
          onChange={(e) => setNewEntry({ ...newEntry, expenses: parseFloat(e.target.value) })}
        />
        <button onClick={addFinancialEntry} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Entry
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Financial Overview</h3>
        <BarChart width={600} height={300} data={financialData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#8884d8" />
          <Bar dataKey="expenses" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Financial Summary</h3>
        <p>Total Income: ${financialData.reduce((total, entry) => total + entry.income, 0)}</p>
        <p>Total Expenses: ${financialData.reduce((total, entry) => total + entry.expenses, 0)}</p>
        <p>Total Profit: ${calculateProfit()}</p>
      </div>
    </div>
  );
};

export default FinancialReporting;