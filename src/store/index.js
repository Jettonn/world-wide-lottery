import { configureStore } from '@reduxjs/toolkit'
import lotteryUsers from './lotteryUsers'


export const store = configureStore({
    reducer:{
        users: lotteryUsers
    }
})