import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages } from "./redux/app/app"

const App = () => {
    const state = useSelector((state) => state.messagesReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
       dispatch(fetchMessages())
    }, [])
    return (
        <div>Greetings: {state.message}</div>
    )
}

export default App;