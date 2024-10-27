import React, { useState } from 'react';

interface Rabbit {
  id: number;
  name: string;
  motherId: number | null;
  fatherId: number | null;
}

const GenealogyTracking: React.FC = () => {
  const [rabbits, setRabbits] = useState<Rabbit[]>([
    { id: 1, name: 'Fluffy', motherId: null, fatherId: null },
    { id: 2, name: 'Thumper', motherId: null, fatherId: null },
    { id: 3, name: 'Cottontail', motherId: 1, fatherId: 2 },
  ]);

  const [newRabbit, setNewRabbit] = useState({ name: '', motherId: '', fatherId: '' });

  const addRabbit = () => {
    const rabbit: Rabbit = {
      id: rabbits.length + 1,
      name: newRabbit.name,
      motherId: newRabbit.motherId ? parseInt(newRabbit.motherId) : null,
      fatherId: newRabbit.fatherId ? parseInt(newRabbit.fatherId) : null,
    };
    setRabbits([...rabbits, rabbit]);
    setNewRabbit({ name: '', motherId: '', fatherId: '' });
  };

  const getParentName = (parentId: number | null) => {
    if (parentId === null) return 'Unknown';
    const parent = rabbits.find(r => r.id === parentId);
    return parent ? parent.name : 'Unknown';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Genealogy Tracking</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Rabbit</h3>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mr-2"
          value={newRabbit.name}
          onChange={(e) => setNewRabbit({ ...newRabbit, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Mother ID"
          className="border p-2 mr-2"
          value={newRabbit.motherId}
          onChange={(e) => setNewRabbit({ ...newRabbit, motherId: e.target.value })}
        />
        <input
          type="number"
          placeholder="Father ID"
          className="border p-2 mr-2"
          value={newRabbit.fatherId}
          onChange={(e) => setNewRabbit({ ...newRabbit, fatherId: e.target.value })}
        />
        <button onClick={addRabbit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Rabbit
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Mother</th>
            <th className="p-2">Father</th>
          </tr>
        </thead>
        <tbody>
          {rabbits.map((rabbit) => (
            <tr key={rabbit.id} className="border-b">
              <td className="p-2">{rabbit.id}</td>
              <td className="p-2">{rabbit.name}</td>
              <td className="p-2">{getParentName(rabbit.motherId)}</td>
              <td className="p-2">{getParentName(rabbit.fatherId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenealogyTracking;