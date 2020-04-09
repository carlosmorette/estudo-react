import React from 'react'

interface IContadorValorProps {
  contador: number
}

// Nossa prop do component é do tipo IContadorValorProps
export default (props: IContadorValorProps) => <p>{props.contador}</p>