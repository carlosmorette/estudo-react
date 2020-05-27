import React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

function Form(){
  return(
    <div>
      <FormControl>
        <InputLabel htmlFor="input">Nome</InputLabel>
        <Input id="input" />
      </FormControl>
    </div>
  )
}

export default Form