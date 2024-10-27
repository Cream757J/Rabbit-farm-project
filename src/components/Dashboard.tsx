import React from 'react';
import { Rabbit, Home, Heart, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <Rabbit className="mr-2" /> Total Rabbits
          </h3>
          <p className="text-3xl">42</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <Home className="mr-2" /> Available Cages
          </h3>
          <p className="text-3xl">15</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <Rabbit className="mr-2" /> Breeding Pairs
          </h3>
          <p className="text-3xl">5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <Heart className="mr-2" /> Health Checks Due
          </h3>
          <p className="text-3xl">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <DollarSign className="mr-2" /> Monthly Revenue
          </h3>
          <p className="text-3xl">$1,250</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2 flex items-center">
            <Rabbit className="mr-2" /> Expected Litters
          </h3>
          <p className="text-3xl">2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;