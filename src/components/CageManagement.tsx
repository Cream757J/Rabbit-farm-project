import React, { useState } from 'react';

interface Cage {
  id: number;
  name: string;
  capacity: number;
  occupied: number;
}

const CageManagement: React.FC = () => {
  const [cages, setCages] = useState<Cage[]>([
    { id: 1, name: 'Cage A', capacity: 4, occupied: 3 },
    { id: 2, name: 'Cage B', capacity: 6, occupied: 4 },
  ]);

  const [newCage, setNewCage] = useState({ name: '', capacity: 0 });

  const addCage = () => {
    setCages([...cages, { ...newCage, id: cages.length + 1, occupied: 0 }]);
    setNewCage({ name: '', capacity: 0 });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cage Management</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Cage</h3>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mr-2"
          value={newCage.name}
          onChange={(e) => setNewCage({ ...newCage, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacity"
          className="border p-2 mr-2"
          value={newCage.capacity}
          onChange={(e) => setNewCage({ ...newCage, capacity: parseInt(e.target.value) })}
        />
        <button onClick={addCage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Cage
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Capacity</th>
            <th className="p-2">Occupied</th>
            <th className="p-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {cages.map((cage) => (
            <tr key={cage.id} className="border-b">
              <td className="p-2">{cage.id}</td>
              <td className="p-2">{cage.name}</td>
              <td className="p-2">{cage.capacity}</td>
              <td className="p-2">{cage.occupied}</td>
              <td className="p-2">{cage.capacity - cage.occupied}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CageManagement;