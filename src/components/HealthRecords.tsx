import React, { useState } from 'react';

interface HealthRecord {
  id: number;
  rabbitId: number;
  date: string;
  description: string;
  treatment: string;
}

const HealthRecords: React.FC = () => {
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([
    { id: 1, rabbitId: 1, date: '2023-04-01', description: 'Annual checkup', treatment: 'None required' },
  ]);

  const [newRecord, setNewRecord] = useState({ rabbitId: 0, date: '', description: '', treatment: '' });

  const addHealthRecord = () => {
    const record: HealthRecord = {
      ...newRecord,
      id: healthRecords.length + 1,
    };
    setHealthRecords([...healthRecords, record]);
    setNewRecord({ rabbitId: 0, date: '', description: '', treatment: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Health Records</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Health Record</h3>
        <input
          type="number"
          placeholder="Rabbit ID"
          className="border p-2 mr-2"
          value={newRecord.rabbitId}
          onChange={(e) => setNewRecord({ ...newRecord, rabbitId: parseInt(e.target.value) })}
        />
        <input
          type="date"
          className="border p-2 mr-2"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mr-2"
          value={newRecord.description}
          onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Treatment"
          className="border p-2 mr-2"
          value={newRecord.treatment}
          onChange={(e) => setNewRecord({ ...newRecord, treatment: e.target.value })}
        />
        <button onClick={addHealthRecord} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Health Record
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Rabbit ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Description</th>
            <th className="p-2">Treatment</th>
          </tr>
        </thead>
        <tbody>
          {healthRecords.map((record) => (
            <tr key={record.id} className="border-b">
              <td className="p-2">{record.id}</td>
              <td className="p-2">{record.rabbitId}</td>
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.description}</td>
              <td className="p-2">{record.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthRecords;