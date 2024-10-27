import React, { useState } from 'react';

interface FeedingEvent {
  id: number;
  cageId: number;
  time: string;
  foodType: string;
}

const FeedingSchedule: React.FC = () => {
  const [feedingEvents, setFeedingEvents] = useState<FeedingEvent[]>([
    { id: 1, cageId: 1, time: '08:00', foodType: 'Pellets' },
    { id: 2, cageId: 2, time: '12:00', foodType: 'Hay' },
  ]);

  const [newEvent, setNewEvent] = useState({ cageId: 0, time: '', foodType: '' });

  const addFeedingEvent = () => {
    setFeedingEvents([...feedingEvents, { ...newEvent, id: feedingEvents.length + 1 }]);
    setNewEvent({ cageId: 0, time: '', foodType: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Feeding Schedule</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Add New Feeding Event</h3>
        <input
          type="number"
          placeholder="Cage ID"
          className="border p-2 mr-2"
          value={newEvent.cageId}
          onChange={(e) => setNewEvent({ ...newEvent, cageId: parseInt(e.target.value) })}
        />
        <input
          type="time"
          className="border p-2 mr-2"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Food Type"
          className="border p-2 mr-2"
          value={newEvent.foodType}
          onChange={(e) => setNewEvent({ ...newEvent, foodType: e.target.value })}
        />
        <button onClick={addFeedingEvent} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Feeding Event
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Cage ID</th>
            <th className="p-2">Time</th>
            <th className="p-2">Food Type</th>
          </tr>
        </thead>
        <tbody>
          {feedingEvents.map((event) => (
            <tr key={event.id} className="border-b">
              <td className="p-2">{event.id}</td>
              <td className="p-2">{event.cageId}</td>
              <td className="p-2">{event.time}</td>
              <td className="p-2">{event.foodType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedingSchedule;