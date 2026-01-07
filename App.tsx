
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import QualitySection from './components/QualitySection';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <QualitySection />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
};

export default App;
