import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount} from './counterSlice'

function Counter() {
const themeTextcolor = useSelector((state)=>state.theme.color)
const count = useSelector((state)=>state.counter.count);
const dispatch = useDispatch();
  return (
    <div>
         <button className='button' aria-label='Increment value'
            onClick={()=> {dispatch(increment())}}> + </button>
        <span className='value' style={{color:themeTextcolor}}>Count : {count}</span>
        <button className='button' aria-label='Decrement value'
            onClick={()=> {dispatch(decrement())}}> - </button>
        <button className='button' aria-label='Decrement value'
            onClick={()=> {dispatch(incrementByAmount(10))}}>Increment </button>
    </div>
  )
}

export default Counter