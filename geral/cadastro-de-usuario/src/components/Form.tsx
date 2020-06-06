import React, { Children } from 'react'
import { makeStyles} from '@material-ui/core'

interface Props {
  flexDirection?: "column" | "row"
  title: string
}

const useStyle = makeStyles({
  root: {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(219,219,219)',
    paddingBottom: 40,
    paddingTop: '10px',
    borderRadius: 30
  }
})

const Form: React.FunctionComponent<Props> = props => {
  const classes = useStyle()

  return(
    <form className={classes.root} style={{ flexDirection: props.flexDirection || "column" }}>
      <h2 style={{ fontFamily: 'Quattrocento Sans'}}>{props.title}</h2>
      {props.children}
    </form>
  )
}

export default Form