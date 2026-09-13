import type { Itechno } from '../../type/technologies';

interface Props {
  stack: Itechno[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const YourStack = ({ stack, removeFromStack, removeAll }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-4">
      <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-500 mb-4">
        {stack.length} Technology Selected
      </p>

      <div className="space-y-2 mb-4">
        {stack.length === 0 && (
          <p className="text-sm text-gray-400">No technology selected yet.</p>
        )}
        {stack.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span>{tech.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromStack(tech.id)}
              className="text-gray-400 hover:text-red-500 text-lg leading-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {stack.length > 0 && (
        <button
          onClick={removeAll}
          className="w-full py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;