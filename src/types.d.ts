
export interface typeProps{
    nameItem: string,
    placeholder: string,
    label: string,
    maxLength:number,
    setValues:(e: React.ChangeEvent<HTMLInputElement>) => void,
    setRotate:(boolean) => void,
    rotate:boolean
}

export interface typeCard{
    name: string,
    cardNumber: string,
    month:number,
    year: number,
    cvv: number
  }
