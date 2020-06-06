import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'
import { makeStyles} from '@material-ui/core'

interface Props{
  nameInput: string
  value?: string
  onChange?(event?: any): void
}

function TextInput(props: Props){
  const { nameInput, value, onChange} = props
  return(
    <div>
        <Input 
          value={value} 
          onChange={onChange} 
          placeholder={nameInput} 
          style={{ fontFamily: 'Quattrocento Sans' }}  
        />
    </div>
  )
}

export default TextInput