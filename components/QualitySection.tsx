
import React from 'react';
import { ShieldCheckIcon, EyeIcon, DatabaseIcon } from './icons';

const QualityPillar: React.FC<{
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    impact: string;
    children: React.ReactNode;
}> = ({ icon, title, subtitle, description, impact, children }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-56 relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                {children}
                <div className="absolute bottom-4 left-6 z-20">
                    <div className="bg-amber-500 text-white p-2 rounded-lg inline-block mb-2">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
            </div>
            <div className="p-8">
                <h4 className="font-bold text-slate-900 text-lg mb-3">{subtitle}</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-500 font-medium">
                    Impacto: {impact}
                </div>
            </div>
        </div>
    );
}

const QualitySection: React.FC = () => {
  return (
    <section id="calidad" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Por qué medir importa</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
            La Calidad no es Estética,<br/> es <span className="text-blue-600">Rentabilidad Pura</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Cada parámetro tiene un impacto directo en tu cadena de valor. Pasar de la intuición a la medición estandarizada es el paso definitivo hacia la eficiencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            <QualityPillar
                icon={<ShieldCheckIcon className="h-6 w-6" />}
                title="Blindaje del Producto"
                subtitle="Resistencia y Grosor"
                description="Un cascarón débil causa pérdidas del <span class='font-bold text-red-500'>10-30%</span> en la recolección. Medir la eficiencia de deposición de calcio protege tu inversión."
                impact="Minimiza mermas y optimiza el manejo nutricional por edad."
            >
                <img 
                    src="https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg"
                    alt="Gallina blanca en granja" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </QualityPillar>

            <QualityPillar
                icon={<EyeIcon className="h-6 w-6" />}
                title="Valor Percibido"
                subtitle="Calidad y Composición"
                description="El consumidor asocia el color intenso con valor nutricional. Los laboratorios valoran la consistencia de la materia prima. Asegura que tu marca sea sinónimo de calidad."
                impact="Preferencia de compra y funcionalidad en industria alimentaria."
            >
                <img 
                    src="https://images.pexels.com/photos/5945842/pexels-photo-5945842.jpeg"
                    alt="Yema de huevo y granos" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </QualityPillar>
            
            <QualityPillar
                icon={<DatabaseIcon className="h-6 w-6" />}
                title="Gestión Inteligente"
                subtitle="Centralización Digital"
                description="De nada sirve medir si no analizas. Nuestro portal web permite visualizar tendencias históricas y actuar rápido ante desviaciones en granjas o lotes específicos."
                impact="Toma de decisiones basada en datos para la mejora continua."
            >
                 <div className="h-full w-full p-6 pb-0 flex items-end justify-between space-x-1 opacity-80 group-hover:opacity-100 transition-opacity duration-500 bg-slate-800">
                    <div style={{height: '35%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '45%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '60%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '55%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '70%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '80%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '90%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '80%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                    <div style={{height: '60%'}} className="flex-1 bg-blue-500 rounded-t-sm"></div>
                </div>
            </QualityPillar>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;