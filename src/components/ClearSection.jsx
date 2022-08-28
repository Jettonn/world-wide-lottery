import {  useDispatch } from 'react-redux'
import { clearUsers } from '../store/lotteryUsers'

const ClearSection = ({ disabled }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex justify-center mt-2">
            <button
                className='py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75'
                disabled={disabled}
                onClick={ () => dispatch(clearUsers()) }
            >
                <span className="pointer-events-none">Clear section</span>
            </button>
        </div>
    )
  }
  
  export default ClearSection