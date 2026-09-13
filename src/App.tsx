import './App.css'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Technologies from './component/Technologies/technologies';
import YourStack from './component/YourStack/YourStack';
import { Suspense, useState } from 'react';
import type { Itechno } from './type/technologies';
import Footer from './component/Footer/footer';

const teachnologiesFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = teachnologiesFetch();
  const [stack, setStack] = useState<Itechno[]>([]);

  const addToStack = (tech: Itechno) => {
    const alreadyExists = stack.some(t => t.category === tech.category);
    if (alreadyExists) {
      alert(`You already picked a ${tech.category} technology`);
      return;
    }
    setStack([...stack, tech]);
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter(t => t.id !== id));
  };

  const removeAll = () => setStack([]);

  return (
    <>
    <Footer/>

      <Nav />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-500 mb-6">Pick one technology per category to build your ideal stack.</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Suspense fallback={<p>Loading...</p>}>
              <Technologies
                technologiesPromise={technologiesPromise}
                addToStack={addToStack}
                selectedIds={stack.map(t => t.id)}
              />
            </Suspense>
          </div>
          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App