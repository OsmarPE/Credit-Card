import { useState } from 'react'
import './App.css'
import ItemForm from './components/ItemForm'
import Visa from './icon/Visa'
import { typeCard } from './types'

function App() {

  const [rotate, setRotate] = useState(false)
  const [cardObj, setCardObj] = useState<typeCard>({
    name: '',
    cardNumber: '',
    cvv: 0,
    year: 0,
    month: 0
  })

  function setValues(e: React.ChangeEvent<HTMLInputElement>): void {

    if (e.target.name === 'cardNumber') {
      let numberCard:string = e.target.value
      let numbersArray:string[] = []
      
      if (numberCard.length === (4 * (numbersArray.length + 1) )) {
        numbersArray = [...numbersArray,  numberCard.slice( 4 * numbersArray.length , 4 * (numbersArray.length + 1))]
        console.log(numbersArray);
        
      }
      
      // console.log(numberCard.slice( 4 , 8 ));
      // console.log(numberCard.slice( 8 , 12 ));
      // console.log(numberCard.slice( 12 , 16 ));
      
    }

    let newCardObj: typeCard = {
      ...cardObj,
      [e.target.name]: e.target.value
    }

    setCardObj(newCardObj)

    // console.log(cardObj);

  }

  const { cardNumber, cvv, month, name, year } = cardObj



  return (
    <main className='w-11/12 box-border max-w-[500px] p-10 pt-[130px] translate-y-[56px] rounded-[10px] bg-white shadow-100 relative'>
      <div style={{ perspective: '1000px' }} className={`card absolute transition-all duration-500 perps top-0 left-0 right-0 w-[86%] mx-auto h-[14rem] ${rotate ? 'active' : ''}`}>
        <section style={{ backfaceVisibility: 'hidden' }} className='card__front absolute shadow-300 p-6 inset-0 text-white rounded-lg flex flex-col justify-between  bg-gradient-to-br from-blue-300 to-blue-400 '>
          <span className='card__date inline-block ml-auto text-sm tracking-[2px]'>{month ? month : 'MM' } / {year ? year : 'YY'} </span>
          <span className='card__number tracking-[2px] text-[1.25rem]'>{Boolean(cardNumber) && cardNumber}</span>
          <div className="card__bottom flex justify-between items-end">
            <span className="card__name uppercase tracking-[2px] text-sm">{name && name}</span>
            <Visa />
          </div>
        </section>
        <section style={{ backfaceVisibility: 'hidden' }} className="card__back shadow-400  absolute inset-0 bg-blue-400 rounded-lg ">
          <div className="line absolute top-8 left-0 right-0 h-10 bg-black"></div>
          <div className="cvv absolute top-[50%] right-4 h-10 px-4 -translate-y-[50%] bg-blue-100 grid place-items-center">
            <span className='text-blue-400'>{cvv && cvv}</span>
          </div>
          <div className='absolute left-4 bottom-6'>
            <Visa />
          </div>
        </section>
      </div>
      <form action="#">
        <div className="form__item mb-4">
          <ItemForm label='Cardholder Name' nameItem='name' maxLength={40} placeholder='Mario Castañeda' setValues={setValues} rotate={rotate} setRotate={setRotate} />
        </div>
        <div className="form__item mb-4">
          <ItemForm label='Credit Card Number' maxLength={16} nameItem='cardNumber' placeholder='1234 5680 2939 4901' setValues={setValues} rotate={rotate} setRotate={setRotate} />
        </div>

        <div className='mb-7 grid items-center gap-3 grid-cols-2'>
          <div className='grid gap-3 grid-cols-2' >
            <div>
              <ItemForm label='MM' maxLength={2} nameItem='month' placeholder='03' setValues={setValues} rotate={rotate} setRotate={setRotate} />
            </div>
            <div>
              <ItemForm label='YY' maxLength={2} nameItem='year' placeholder='23' setValues={setValues} rotate={rotate} setRotate={setRotate} />
            </div>
          </div>
          <div>
            <ItemForm label='CVV' maxLength={3} nameItem='cvv' placeholder='232' setValues={setValues} rotate={rotate} setRotate={setRotate} />
          </div>
        </div>
        <input className='cursor-pointer transition-all outline-none duration-500 hover:opacity-80 uppercase tracking-widest h-[50px] shadow-200 text-center w-full bg-gradient-to-r from-blue-300 to-blue-400 rounded-lg text-white font-semibold' type="submit" value="Submit" />
      </form>
    </main>
  )
}

export default App
