import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bg from './assets/pexels-pixabay-210574.jpg'

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
        if (!currencyInfo || !currencyInfo[to]) return
        setConvertedAmount(amount * currencyInfo[to]) 
  } 

    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative w-full flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-xl mx-auto rounded-2xl p-8 bg-white/95 shadow-2xl z-40">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                onAmountChange={(value) => setAmount(value)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full px-5 py-2 shadow-lg border-2 border-white z-50"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white px-6 py-4 rounded-full text-lg font-semibold shadow-xl">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default App
