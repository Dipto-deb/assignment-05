import { use } from 'react';
import type { Itechno } from '../../type/technologies';

const badgeColors: Record<string, string> = {
  Popular: 'bg-blue-100 text-blue-600',
  Versatile: 'bg-green-100 text-green-600',
  Fast: 'bg-red-100 text-red-600',
  Standard: 'bg-emerald-100 text-emerald-600',
  'Top SQL': 'bg-orange-100 text-orange-600',
  Cache: 'bg-red-100 text-red-600',
  Ubiquitous: 'bg-yellow-100 text-yellow-700',
  Essential: 'bg-sky-100 text-sky-600',
  Robust: 'bg-teal-100 text-teal-600',
  Modern: 'bg-cyan-100 text-cyan-600',
  Containers: 'bg-indigo-100 text-indigo-600',
};

interface Props {
  technologiesPromise: Promise<{ technologies: Itechno[] }>;
  addToStack: (tech: Itechno) => void;
  selectedIds: string[];
}

const Technologies = ({ technologiesPromise, addToStack, selectedIds }: Props) => {
  const data = use(technologiesPromise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {data.technologies.map((tech) => {
        const isSelected = selectedIds.includes(tech.id);
        return (
          <div
            key={tech.id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-3xl">{tech.icon}</span>
              {tech.badge && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColors[tech.badge] || 'bg-gray-100 text-gray-600'}`}>
                  {tech.badge}
                </span>
              )}
            </div>

            <h3 className="font-bold text-lg text-gray-900">{tech.name}</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4 leading-relaxed">
              {tech.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
              <span>{tech.category}</span>
              <span>{tech.difficulty}</span>
              <span className="flex items-center gap-1">
                ⭐ {tech.rating}
              </span>
            </div>

            <button
              onClick={() => addToStack(tech)}
              disabled={isSelected}
              className={`w-full py-2 rounded-lg font-medium text-sm transition ${
                isSelected
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {isSelected ? 'Added' : 'Add to Stack'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;