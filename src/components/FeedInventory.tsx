import React, { useState } from 'react';

interface FeedItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

const FeedInventory: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    { id: 1, name: 'Pellets', quantity: 100, unit: 'kg' },
    { id: 2, name: 'Hay', quantity: 50, unit: 'bales' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', quantity: 0, unit: '' });

  const addFeedItem = () => {
    const item: FeedItem = {
      ...newItem,
      id: feedItems.length + 1,
    };
    setFeedItems([...feedItems, item]);
    setNewItem({ name: '', quantity: 0, unit: '' });
  };

  const updateQuantity = (id: number, change: number) => {
    setFeedItems(feedItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Feed Inventory Management</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Feed Item</h3>
        <input
          type="text"
          placeholder="Feed Name"
          className="border p-2 mr-2"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 mr-2"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Unit"
          className="border p-2 mr-2"
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
        />
        <button onClick={addFeedItem} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Feed Item
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Unit</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unit}</td>
              <td className="p-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedInventory;