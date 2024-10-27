import React, { useState } from 'react';

interface Sale {
  id: number;
  rabbitId: number;
  date: string;
  price: number;
  buyerName: string;
}

const SalesTracking: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([
    { id: 1, rabbitId: 3, date: '2023-04-15', price: 50, buyerName: 'John Doe' },
  ]);

  const [newSale, setNewSale] = useState({ rabbitId: 0, date: '', price: 0, buyerName: '' });

  const addSale = () => {
    const sale: Sale = {
      ...newSale,
      id: sales.length + 1,
    };
    setSales([...sales, sale]);
    setNewSale({ rabbitId: 0, date: '', price: 0, buyerName: '' });
  };

  const totalRevenue = sales.reduce((sum, sale) => sum + sale.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sales Tracking</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Sale</h3>
        <input
          type="number"
          placeholder="Rabbit ID"
          className="border p-2 mr-2"
          value={newSale.rabbitId}
          onChange={(e) => setNewSale({ ...newSale, rabbitId: parseInt(e.target.value) })}
        />
        <input
          type="date"
          className="border p-2 mr-2"
          value={newSale.date}
          onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 mr-2"
          value={newSale.price}
          onChange={(e) => setNewSale({ ...newSale, price: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Buyer Name"
          className="border p-2 mr-2"
          value={newSale.buyerName}
          onChange={(e) => setNewSale({ ...newSale, buyerName: e.target.value })}
        />
        <button onClick={addSale} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Sale
        </button>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Rabbit ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Price</th>
            <th className="p-2">Buyer Name</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="border-b">
              <td className="p-2">{sale.id}</td>
              <td className="p-2">{sale.rabbitId}</td>
              <td className="p-2">{sale.date}</td>
              <td className="p-2">${sale.price.toFixed(2)}</td>
              <td className="p-2">{sale.buyerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="font-bold text-xl">
        Total Revenue: ${totalRevenue.toFixed(2)}
      </div>
    </div>
  );
};

export default SalesTracking;