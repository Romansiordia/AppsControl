
import React, { useState, useEffect } from 'react';
import { EggIcon, MicroscopeIcon, ScaleIcon, CheckCircle2Icon, ArrowRightIcon, ExternalLinkIcon, ActivityIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Solution {
  icon: React.ReactNode;
  title: string;
  logoUrl?: string;
  category: string;
  categoryIcon: React.ReactNode;
  description: string;
  features: string[];
  imageUrls: string[];
  liveUrl: string;
  theme: {
    border: string;
    text: string;
    bg: string;
    iconBg: string;
    buttonHover: string;
  };
}

const solutionsData: Solution[] = [
  {
    icon: <EggIcon className="text-amber-400 h-6 w-6 mr-2" />,
    title: 'Egg Monitor',
    logoUrl: '/assets/egg-monitor-logo.png',
    category: 'Calidad de Huevo',
    categoryIcon: <ActivityIcon className="text-amber-600 h-6 w-6" />,
    description: 'Visualiza en tiempo real los indicadores clave de calidad del huevo. Anticipa problemas, ajusta la nutrición y toma decisiones proactivas para maximizar la producción de huevo vendible.',
    features: ['Dashboard interactivo de calidad', 'Comparativas por lote y genética', 'Alertas automáticas de desviación'],
    imageUrls: [
        '/assets/egg-monitor-kpis.png',
        '/assets/egg-monitor-gauges.png',
        '/assets/egg-monitor-charts.png',
    ],
    liveUrl: 'https://egg-monitorv1.vercel.app/',
    theme: {
      border: 'hover:border-amber-400',
      text: 'text-amber-600',
      bg: 'bg-amber-100',
      iconBg: 'text-amber-500',
      buttonHover: 'hover:text-amber-700',
    },
  },
  {
    icon: <MicroscopeIcon className="text-indigo-400 h-6 w-6 mr-2" />,
    title: 'LabSys',
    category: 'Gestión de Laboratorio',
    categoryIcon: <MicroscopeIcon className="text-indigo-600 h-6 w-6" />,
    description: 'Nuestra plataforma LabSys centraliza y visualiza los resultados de tu laboratorio. Sincroniza datos de múltiples equipos y accede a un historial completo para cada muestra.',
    features: ['Integración con equipos de laboratorio', 'Visualización de historial por muestra', 'Garantía de trazabilidad y calidad'],
    imageUrls: [
        '/assets/labsys-dash-1.png',
        '/assets/labsys-dash-2.png',
        '/assets/labsys-dash-3.png',   
    ],
    liveUrl: 'https://sync-lab-rho.vercel.app/',
    theme: {
      border: 'hover:border-indigo-400',
      text: 'text-indigo-600',
      bg: 'bg-indigo-100',
      iconBg: 'text-indigo-500',
      buttonHover: 'hover:text-indigo-700',
    },
  },
   {
    icon: <ScaleIcon className="text-emerald-400 h-6 w-6 mr-2" />,
    title: 'Feed Balance',
    logoUrl: '/assets/feed-balance-logo.png',
    category: 'Optimización de Alimento',
    categoryIcon: <ScaleIcon className="text-emerald-600 h-6 w-6" />,
    description: 'Formula raciones de mínimo costo sin sacrificar el rendimiento. Nuestro motor de optimización te permite gestionar ingredientes, precios y restricciones para encontrar la mezcla perfecta.',
    features: ['Optimización de costo de fórmulas', 'Base de datos de ingredientes', 'Simulación de escenarios y precios'],
    imageUrls: [
        '/assets/feed-balance-dash-1.png',
        '/assets/feed-balance-dash-2.png',
    ],
    liveUrl: 'https://feed-balance.vercel.app/',
    theme: {
      border: 'hover:border-emerald-400',
      text: 'text-emerald-600',
      bg: 'bg-emerald-100',
      iconBg: 'text-emerald-500',
      buttonHover: 'hover:text-emerald-700',
    },
  },
];

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (solution.imageUrls.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImage(current => (current === solution.imageUrls.length - 1 ? 0 : current + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [solution.imageUrls.length]);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? solution.imageUrls.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === solution.imageUrls.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className={`group relative bg-slate-50 rounded-2xl border border-slate-200 ${solution.theme.border} transition-all hover:shadow-xl overflow-hidden flex flex-col`}>
      <div className="h-56 w-full overflow-hidden relative">
        {solution.imageUrls.map((url, index) => (
             <img 
                key={index}
                src={url} 
                alt={`Dashboard de ${solution.title} - Vista ${index + 1}`}
                className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.onerror = null; 
                   target.src='https://picsum.photos/800/400?grayscale';
                  }}
              />
        ))}
        
        {solution.imageUrls.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none hover:bg-black/50">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none hover:bg-black/50">
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {solution.imageUrls.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentImage ? 'bg-white' : 'bg-white/50'}`}></div>
                ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            {solution.logoUrl ? (
              <img src={solution.logoUrl} alt={`${solution.title} Logo`} className="h-10" loading="lazy" />
            ) : solution.title === 'LabSys' ? (
              <div className="bg-blue-800 px-4 py-1.5 inline-block rounded-md -ml-1">
                <h3 className="text-2xl font-bold text-white tracking-wider">LabSys</h3>
              </div>
            ) : (
              <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
            )}
          </div>
          <div className={`${solution.theme.bg} p-2 rounded-lg`}>
            {solution.categoryIcon}
          </div>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
          {solution.description}
        </p>
        <ul className="space-y-3 mb-8">
          {solution.features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-700 text-sm">
              <CheckCircle2Icon className={`h-4 w-4 ${solution.theme.iconBg} mr-2`} />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto">
          <a href={solution.liveUrl} target="_blank" rel="noopener noreferrer" className={`${solution.theme.text} font-bold ${solution.theme.buttonHover} flex items-center`}>
            Ver App <ArrowRightIcon className="h-4 w-4 ml-1" />
          </a>
          <a 
              href={solution.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-full"
          >
              Ir al Dashboard <ExternalLinkIcon className="h-3 w-3 ml-1.5" />
          </a>
        </div>
      </div>
    </div>
  );
};


const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Nuestras Soluciones Integradas</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Aplicaciones especializadas que cubren el ciclo completo: desde el insumo hasta el producto final y la gestión de datos.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutionsData.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;