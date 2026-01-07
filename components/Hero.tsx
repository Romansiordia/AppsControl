
import React from 'react';
import { ArrowRightIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Software Especializado para la Industria</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Transformamos datos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">decisiones rentables</span>.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Optimiza la calidad, controla tus materias primas y sincroniza tu laboratorio con nuestras plataformas de inteligencia para la industria pecuaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#soluciones" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition flex items-center justify-center space-x-2">
              <span>Ver Soluciones</span>
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href="#contacto" className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold transition">
              Saber más
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-0">
               <img
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkcCNW7i5UQEp9ILr2v2qZQI4_ha6YYsObtXu6ARG0Ml1n6l2IFtBJkxXSVNTc3VjF2Ypoq1ETjYzmWCp4gK7pUCcE3r1IDqbH4QVC4vFzESyPZSQa0zGKtEzrF1sfefPZUi6BqeE8LbRvO9gxQ5oINEJSdpT_Dq7ovf2kk07VxWrlvmyWSss7FHTFWjrjmIYMKvt_l7VnNlZoenGCwN14aZucrpy5LxrruP-VY=w1280"
                  alt="Dashboard de la aplicación EggMonitor mostrando KPIs de calidad de huevo"
                  className="w-full object-cover rounded-b-2xl h-[400px]"
                  width="1280"
                  height="603"
                  loading="lazy"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;