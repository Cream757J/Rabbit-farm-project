import React, { useState } from 'react';

interface Rabbit {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
  weightHistory: { date: string; weight: number }[];
}

const RabbitManagement: React.FC = () => {
  const [rabbits, setRabbits] = useState<Rabbit[]>([
    { id: 1, name: 'Fluffy', breed: 'Dutch', age: 2, weight: 2.5, weightHistory: [{ date: '2023-04-01', weight: 2.5 }] },
    { id: 2, name: 'Thumper', breed: 'Rex', age: 1, weight: 1.8, weightHistory: [{ date: '2023-04-01', weight: 1.8 }] },
  ]);

  const [newRabbit, setNewRabbit] = useState({ name: '', breed: '', age: 0, weight: 0 });
  const [selectedRabbit, setSelectedRabbit] = useState<Rabbit | null>(null);
  const [newWeight, setNewWeight] = useState(0);

  const addRabbit = () => {
    const rabbit: Rabbit = {
      ...newRabbit,
      id: rabbits.length + 1,
      weightHistory: [{ date: new Date().toISOString().split('T')[0], weight: newRabbit.weight }]
    };
    setRabbits([...rabbits, rabbit]);
    setNewRabbit({ name: '', breed: '', age: 0, weight: 0 });
  };

  const addWeight = () => {
    if (selectedRabbit && newWeight > 0) {
      const updatedRabbits = rabbits.map(rabbit => {
        if (rabbit.id === selectedRabbit.id) {
          const updatedWeightHistory = [
            ...rabbit.weightHistory,
            { date: new Date().toISOString().split('T')[0], weight: newWeight }
          ];
          return { ...rabbit, weight: newWeight, weightHistory: updatedWeightHistory };
        }
        return rabbit;
      });
      setRabbits(updatedRabbits);
      setSelectedRabbit(null);
      setNewWeight(0);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Rabbit Management</h2>
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
          type="text"
          placeholder="Breed"
          className="border p-2 mr-2"
          value={newRabbit.breed}
          onChange={(e) => setNewRabbit({ ...newRabbit, breed: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          className="border p-2 mr-2"
          value={newRabbit.age}
          onChange={(e) => setNewRabbit({ ...newRabbit, age: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Weight"
          className="border p-2 mr-2"
          value={newRabbit.weight}
          onChange={(e) => setNewRabbit({ ...newRabbit, weight: parseFloat(e.target.value) })}
        />
        <button onClick={addRabbit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Rabbit
        </button>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Breed</th>
            <th className="p-2">Age</th>
            <th className="p-2">Weight</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rabbits.map((rabbit) => (
            <tr key={rabbit.id} className="border-b">
              <td className="p-2">{rabbit.id}</td>
              <td className="p-2">{rabbit.name}</td>
              <td className="p-2">{rabbit.breed}</td>
              <td className="p-2">{rabbit.age}</td>
              <td className="p-2">{rabbit.weight} kg</td>
              <td className="p-2">
                <button
                  onClick={() => setSelectedRabbit(rabbit)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update Weight
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRabbit && (
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Update Weight for {selectedRabbit.name}</h3>
          <input
            type="number"
            placeholder="New Weight"
            className="border p-2 mr-2"
            value={newWeight}
            onChange={(e) => setNewWeight(parseFloat(e.target.value))}
          />
          <button onClick={addWeight} className="bg-green-500 text-white px-4 py-2 rounded">
            Update Weight
          </button>
        </div>
      )}
    </div>
  );
};

export default RabbitManagement;