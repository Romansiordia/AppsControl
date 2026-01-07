
import React from 'react';
import { UsersIcon, ActivityIcon, BarChart3Icon } from './icons';

const AudienceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{description}</p>
        </div>
    );
};

const TargetAudience: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">¿A quién ayudamos?</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Herramientas diseñadas para cada rol clave en la industria.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AudienceCard 
            icon={<div className="bg-blue-100 w-full h-full rounded-full flex items-center justify-center"><UsersIcon className="text-blue-600 h-6 w-6" /></div>}
            title="Gerentes de Compras" 
            description="Negocia con proveedores basándote en datos históricos reales de calidad. Deja de pagar por materia prima que no cumple los estándares." 
          />
          <AudienceCard 
            icon={<div className="bg-amber-100 w-full h-full rounded-full flex items-center justify-center"><ActivityIcon className="text-amber-600 h-6 w-6" /></div>}
            title="Nutriólogos" 
            description="Ajusta tus fórmulas con precisión conociendo el contenido nutrimental exacto de cada lote y su variación estacional." 
          />
          <AudienceCard 
            icon={<div className="bg-emerald-100 w-full h-full rounded-full flex items-center justify-center"><BarChart3Icon className="text-emerald-600 h-6 w-6" /></div>}
            title="Gerentes de Producción y Calidad" 
            description="Detecta problemas en granja o laboratorio rápidamente. Analiza si la baja calidad se debe a la línea genética, edad, nutrición o proveedor." 
          />
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
