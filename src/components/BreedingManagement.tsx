import React, { useState } from 'react';

interface BreedingPair {
  id: number;
  maleId: number;
  femaleId: number;
  dateMatched: string;
  expectedKitDate: string;
  actualKitDate?: string;
  litterSize?: number;
}

interface Rabbit {
  id: number;
  name: string;
  breed: string;
  age: number;
}

const BreedingManagement: React.FC = () => {
  const [breedingPairs, setBreedingPairs] = useState<BreedingPair[]>([
    { id: 1, maleId: 1, femaleId: 2, dateMatched: '2023-04-01', expectedKitDate: '2023-05-01' },
  ]);

  const [newPair, setNewPair] = useState({ maleId: 0, femaleId: 0, dateMatched: '' });

  // Mock rabbit data for breeding suggestions
  const rabbits: Rabbit[] = [
    { id: 1, name: 'Buck1', breed: 'Dutch', age: 2 },
    { id: 2, name: 'Doe1', breed: 'Dutch', age: 1 },
    { id: 3, name: 'Buck2', breed: 'Rex', age: 3 },
    { id: 4, name: 'Doe2', breed: 'Rex', age: 2 },
  ];

  const addBreedingPair = () => {
    const expectedKitDate = new Date(newPair.dateMatched);
    expectedKitDate.setDate(expectedKitDate.getDate() + 31); // Rabbit gestation is about 31 days

    const pair: BreedingPair = {
      ...newPair,
      id: breedingPairs.length + 1,
      expectedKitDate: expectedKitDate.toISOString().split('T')[0],
    };
    setBreedingPairs([...breedingPairs, pair]);
    setNewPair({ maleId: 0, femaleId: 0, dateMatched: '' });
  };

  const updateLitterInfo = (id: number, actualKitDate: string, litterSize: number) => {
    setBreedingPairs(breedingPairs.map(pair => 
      pair.id === id ? { ...pair, actualKitDate, litterSize } : pair
    ));
  };

  const getBreedingSuggestions = () => {
    const suggestions: string[] = [];
    
    // Simple breeding suggestion logic
    rabbits.forEach(male => {
      if (male.age >= 1) { // Assuming rabbits are ready to breed at 1 year
        rabbits.forEach(female => {
          if (female.age >= 1 && male.id !== female.id && male.breed === female.breed) {
            suggestions.push(`Consider breeding ${male.name} (${male.breed}) with ${female.name} (${female.breed})`);
          }
        });
      }
    });

    return suggestions;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Breeding Management</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Breeding Pair</h3>
        <input
          type="number"
          placeholder="Male Rabbit ID"
          className="border p-2 mr-2"
          value={newPair.maleId}
          onChange={(e) => setNewPair({ ...newPair, maleId: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Female Rabbit ID"
          className="border p-2 mr-2"
          value={newPair.femaleId}
          onChange={(e) => setNewPair({ ...newPair, femaleId: parseInt(e.target.value) })}
        />
        <input
          type="date"
          className="border p-2 mr-2"
          value={newPair.dateMatched}
          onChange={(e) => setNewPair({ ...newPair, dateMatched: e.target.value })}
        />
        <button onClick={addBreedingPair} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Breeding Pair
        </button>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Male ID</th>
            <th className="p-2">Female ID</th>
            <th className="p-2">Date Matched</th>
            <th className="p-2">Expected Kit Date</th>
            <th className="p-2">Actual Kit Date</th>
            <th className="p-2">Litter Size</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {breedingPairs.map((pair) => (
            <tr key={pair.id} className="border-b">
              <td className="p-2">{pair.id}</td>
              <td className="p-2">{pair.maleId}</td>
              <td className="p-2">{pair.femaleId}</td>
              <td className="p-2">{pair.dateMatched}</td>
              <td className="p-2">{pair.expectedKitDate}</td>
              <td className="p-2">{pair.actualKitDate || '-'}</td>
              <td className="p-2">{pair.litterSize || '-'}</td>
              <td className="p-2">
                {!pair.actualKitDate && (
                  <button
                    onClick={() => {
                      const actualKitDate = prompt('Enter actual kit date (YYYY-MM-DD):');
                      const litterSize = prompt('Enter litter size:');
                      if (actualKitDate && litterSize) {
                        updateLitterInfo(pair.id, actualKitDate, parseInt(litterSize));
                      }
                    }}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Update Litter Info
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Breeding Suggestions</h3>
        <ul className="list-disc pl-5">
          {getBreedingSuggestions().map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreedingManagement;