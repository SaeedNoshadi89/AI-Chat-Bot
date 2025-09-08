import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
     fetch('/api/hello')
         .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
         })

         .then((data) => setMessage(data.message))
         .catch((err) => setMessage(`Error: ${err.message}`));
   }, []);

   return (
      <>
         <div className="p-4">
            <p className="font-bold text-3xl">{message}</p>
            <Button>Click Me</Button>
         </div>
      </>
   );
}

export default App;
