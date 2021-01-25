import { configureStore } from '@reduxjs/toolkit' //assures that we pass in the reducer argument
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})



