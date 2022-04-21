import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    update,
    viewListSelector,
} from './todolistSlice';

export default function Todo() {
    const dispatch = useDispatch();
    const viewList = useSelector(viewListSelector);
    const [goal, setGoal] = useState('New todo item')

    return (
        <div>
            <button>Button</button>
            <p>{viewList}</p>
            {console.log(viewList)}
            
        </div>
    )
}