import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/features/counter/counterSlice.js'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const isLogged = useSelector((state) => state.counter.isLogget)
    const dispatch = useDispatch()

    return (
    <div>
        <span>{isLogged}</span>
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <span>   </span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(incrementByAmount(20))}
                style={{ marginLeft: '5px' }}
            >
                Increment By Amount
            </button>
        </div>
    </div>
    )
}