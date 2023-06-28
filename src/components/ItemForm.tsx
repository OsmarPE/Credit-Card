import {typeProps} from '../types'

function ItemForm({nameItem,placeholder,label,maxLength,setValues,rotate,setRotate}:typeProps):JSX.Element {

  function setRotateCard(e:React.FocusEvent<HTMLInputElement>) {
      if (e.target.name !== 'cvv') return
      setRotate(!rotate)
      
  }

  return (
    <>
         <label className='text-blue-400 text-sm inline-block mb-2' htmlFor={nameItem}>{label}</label>
         <input onChange={setValues} onFocus={setRotateCard} onBlur={setRotateCard}  maxLength={maxLength}  autoComplete='off'  className='w-full h-11 px-3 rounded-md border-2 text-blue-400 outline-none border-gray-100 transition-all duration-300 hover:border-blue-300 focus:border-blue-300 placeholder:text-gray-300 placeholder:text-sm' type="text" name={nameItem} id={nameItem} placeholder={placeholder} />
    </>
  )
}

export default ItemForm