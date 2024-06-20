import  { useRef } from 'react';
import Contato from "./Components/Contato";

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <div className="rounded bg-gray-100 p-4 mt-4 h-[90vh]">
          
        </div>
        <div id="contato" ref={contatoRef}>
          <Contato />
        </div>
      </div>
    </>
  );
}

export default App;
