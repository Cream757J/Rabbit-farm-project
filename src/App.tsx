import React, { useState } from 'react';
import { Rabbit, Clipboard, Home, Heart, DollarSign, Users, Package, Cloud, BarChart } from 'lucide-react';
import Dashboard from './components/Dashboard';
import RabbitManagement from './components/RabbitManagement';
import CageManagement from './components/CageManagement';
import FeedingSchedule from './components/FeedingSchedule';
import BreedingManagement from './components/BreedingManagement';
import HealthRecords from './components/HealthRecords';
import SalesTracking from './components/SalesTracking';
import GenealogyTracking from './components/GenealogyTracking';
import FeedInventory from './components/FeedInventory';
import WeatherIntegration from './components/WeatherIntegration';
import FinancialReporting from './components/FinancialReporting';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl font-bold">Rabbit Farm Manager</h1>
      </header>
      <div className="flex">
        <nav className="w-64 bg-secondary h-screen p-4">
          <ul>
            {[
              { id: 'dashboard', icon: Home, label: 'Dashboard' },
              { id: 'rabbits', icon: Rabbit, label: 'Rabbits' },
              { id: 'cages', icon: Home, label: 'Cages' },
              { id: 'feeding', icon: Clipboard, label: 'Feeding Schedule' },
              { id: 'breeding', icon: Rabbit, label: 'Breeding' },
              { id: 'health', icon: Heart, label: 'Health Records' },
              { id: 'sales', icon: DollarSign, label: 'Sales' },
              { id: 'genealogy', icon: Users, label: 'Genealogy' },
              { id: 'feed', icon: Package, label: 'Feed Inventory' },
              { id: 'weather', icon: Cloud, label: 'Weather' },
              { id: 'financial', icon: BarChart, label: 'Financial Reports' },
            ].map((item) => (
              <li key={item.id} className={`mb-2 ${activeTab === item.id ? 'text-accent' : 'text-white'}`}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className="flex items-center w-full p-2 rounded hover:bg-primary transition-colors duration-200"
                >
                  <item.icon className="mr-2" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'rabbits' && <RabbitManagement />}
          {activeTab === 'cages' && <CageManagement />}
          {activeTab === 'feeding' && <FeedingSchedule />}
          {activeTab === 'breeding' && <BreedingManagement />}
          {activeTab === 'health' && <HealthRecords />}
          {activeTab === 'sales' && <SalesTracking />}
          {activeTab === 'genealogy' && <GenealogyTracking />}
          {activeTab === 'feed' && <FeedInventory />}
          {activeTab === 'weather' && <WeatherIntegration />}
          {activeTab === 'financial' && <FinancialReporting />}
        </main>
      </div>
    </div>
  );
}

export default App;