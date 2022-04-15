import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decreament, increase, increment } from './CountSlice';

const Count = () => {
    const dispatch = useDispatch();
    const {count} = useSelector(data => data);
    const fuck = [
        {"id" : 1, "name" : 'anh'},
        {"id" : 1, "name" : 'anh'},
        {"id" : 1, "name" : 'anh'},
    ]
  return (
    <div>{count.value}
        <button onClick={ () => dispatch(increment())}>Tăng</button>
        <button onClick={ () => dispatch(decreament())}>Gỉam</button>
        <button onClick={ () => dispatch(increase(fuck))}>data</button>
    </div>
  )
}

export default Count