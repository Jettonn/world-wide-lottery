import CustomButton from '../components/GenerateUser'
import CurrentUser from '../components/CurrentUser'
import ClearSection from '../components/ClearSection'
import { useSelector, useDispatch } from 'react-redux'
import { addUser,incrementTimesPlayed, changeEmail } from '../store/lotteryUsers'
import { useState } from 'react'

//confetti
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function Home(){
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const users = useSelector((state) => state.users.users)
    const currentUser = useSelector((state) => state.users.currentUser)
    const dispatch = useDispatch()
    
    const generateUserApi = () => {
        return Promise.resolve(
            fetch(`https://randomuser.me/api?page=1`)
            .then(response => response.json())
            .then(result => result.results[0])
            .catch((err) => {
                setLoading(false)
                console.log(err.message);
            })
        )
    }
    
    const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)

    const generateNewUser = async () => {
        setLoading(true)
        editEmail(false)
        //generate new user
        const response = await generateUserApi()
        //new user data from response
        const newLotteryUser = lotteryUserData(response)
        //random number check
        const isWinner = generateRandomNumber() === newLotteryUser.age
        if(isWinner) newLotteryUser.isWinner = true
        //check if user exists
        if(userCheck(newLotteryUser)) dispatch(incrementTimesPlayed(newLotteryUser))
        else dispatch(addUser(newLotteryUser))
        if(isWinner) {
            await jsConfetti.addConfetti({
                emojis: ['😍', '🤑', '💸', '🎊']
            })
        }
        setLoading(false)
    }

    const userCheck = (newUser) => {
        const existedUser = users.filter(user => user.id === newUser.id && user.email === newUser.email && user.fullname === newUser.fullname)
        return existedUser.length !== 0
    }

    const lotteryUserData = (model) => {
        const currentTime = new Date()
        return {
            picture: model.picture.thumbnail,
            fullname: `${model.name.title}. ${model.name.first} ${model.name.last}`,
            email: model.email,
            gender: model.gender,
            cell: model.cell,
            phone: model.phone,
            location: model.location,
            nat: model.nat,
            isWinner: false,
            age: model.dob.age,
            timesPlayed: 1,
            time: currentTime.toISOString(),
            id: model.id.value,
        }
    }

    const editEmail = (value) => {setEdit(value)}

    const updateEmail = (value) => {
        editEmail(false)
        dispatch(changeEmail(value))
    }

    return (
        <>
        <div className="flex justify-center">
            <CustomButton text="Generate User" generateUser={generateNewUser} disabled={loading}/>
        </div>
            { currentUser !== null && <CurrentUser currentUser={currentUser} edit={edit} editEmail={editEmail} updateEmail={updateEmail}/> }
            { currentUser !== null && <ClearSection disabled={loading}/> }
        </>
    )
}

export default Home