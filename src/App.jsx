import { useState } from 'react';
import { InputBox } from './components';
import usecurrencyinfo from './hooks/usecurrencyinfo';
import './App.css';

function App() {
  const [amt, setamt] = useState(0);
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr');
  const [ans, setans] = useState(0);

  const currencyinfo = usecurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    
    setfrom(to);
    setto(from);
  };

  const convert = () => {
    // if (!currencyinfo[to]) return;
    setans(amt * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >

      <div className='text-5xl font-extrabold text-blue-900 text-center mt-6 tracking-wide drop-shadow-md bg-cover bg-no-repeat'>
        CURRENCY CONVERTOR
      </div>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amt}
                onamtchg={setamt}
                oncurrchg={setfrom}
                currop={options}
                selectc={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-900 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ans}
                onamtchg={() => {}}
                oncurrchg={setto}
                currop={options}
                selectc={to}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
