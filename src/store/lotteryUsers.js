import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: [],
    currentUser: null
}

const lotteryUsers = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
            state.currentUser = action.payload
        },
        incrementTimesPlayed: (state, action) => {
            state.currentUser = action.payload
            const user = state.users.find(user => user.id === action.payload.id && user.email === action.payload.email && user.fullname === action.payload.fullname)
            user.timesPlayed += 1
        },
        clearUsers: (state) => {
            state.users = []
            state.currentUser = null
        },
        changeEmail: (state, action) => {
            const user = state.users.find(user => user.id === state.currentUser.id && user.email === state.currentUser.email && user.fullname === state.currentUser.fullname)
            state.currentUser.email = action.payload
            user.email = action.payload
        }
    }
})

export const { addUser, incrementTimesPlayed, clearUsers, changeEmail } = lotteryUsers.actions
export default lotteryUsers.reducer