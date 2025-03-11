import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from './components'

function App() {


  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert = () => {
    if(amount < 0) {
      alert('Enter the valid amount')
      setAmount(0)
    }
    else {
      setConvertedAmount(amount* currencyInfo[to])
    }
  }
  const reset = () => {
    setAmount(0)
    setConvertedAmount(0)
  }
  const resetCurrency = () => {
    setFrom("usd")
    setTo("inr")
  }
  const bgImage = 'https://images.pexels.com/photos/19926864/pexels-photo-19926864/free-photo-of-waves-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  const leftImage = 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 h-full bg-cover bg-no-repeat' style={{backgroundImage: `url(${leftImage})`,}}></div>
      <div
        className="w-1/2 h-full flex justify-center items-center bg-cover bg-no-repeat"
        style={{backgroundImage: `url(${bgImage})`,
      }}
      >
        <div
          className='w-full'>
            <div className='w-full max-w-md mx-auto
            border border-gray-60 rounded-lg p-5
            backdrop-blur-sm bg-white/30'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert()
                }}
                >
                  <div className='w-full mb-1'>
                    <InputBox 
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onAmountChange={(amount) => setAmount(amount)}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      selectCurrency={from}
                    />
                  </div>
                  <div className='relative w-full h-0.5'>
                      <button 
                        type='button'
                        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                        border-2 border-white rounded-md
                        bg-blue-600 text-white px-2 py-0.5'
                        onClick={swap}
                        >swap
                      </button>

                    </div>

                      <div className='w-full mt-1 mb-4'>
                        <InputBox
                          label="To"
                          amount={convertedAmount}

                          onCurrencyChange={(currency) => setTo(currency)}
                          currencyOptions={options}
                          selectCurrency={to}
                          amountDisable
                          />
                      </div>
                      <button type='submit'
                      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer'
                      onClick={convert}
                      
                      >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button> 
                      <div className='w-full flex justify-center'>
                        <button className='w-1/2 mt-3 bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer' onClick={reset}>RESET</button>
                        <button className='w-1/2 ml-2 mt-3 bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer' onClick={resetCurrency}>DEFAULT CURRENCY</button>
                      </div>
                </form>
            </div>
          </div>

      </div>
    </div>
  )
}

export default App
