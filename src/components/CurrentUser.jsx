import { PencilIcon } from '@heroicons/react/solid'
import { useState } from 'react'

function CurrentUser({ currentUser, edit, editEmail, updateEmail }){
    const [email, setEmail] = useState('')
    const handleEditButtonClick = () => {
        setEmail(currentUser.email)
        editEmail(true)
    }
    const handleClick = event => {
        event.preventDefault();
        updateEmail(email)
    }
    const handleChange = (e) => { setEmail(e.target.value)}

    return (
        <>
            <div className="flex justify-center mt-6">
                <div className='flex justify-center flex-col'>
                    <div className="flex justify-center mb-2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm group flex items-center">
                            <img className="shrink-0 h-20 w-20 rounded-full" src={currentUser.picture} alt={currentUser.fullname} />
                            <div className="ltr:ml-3 rtl:mr-3 ml-3">
                                <p className="text-sm text-lg text-slate-700 group-hover:text-slate-900 font-bold">{currentUser.fullname}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-2">
                            <div className='flex justify-between'>
                                <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">Email</h5>
                                {
                                    !edit && (
                                        <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-1 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                                            onClick={handleEditButtonClick}>
                                            <PencilIcon className='pointer-events-none w-6 h-6 hover:bg-blue-700' />
                                        </button>
                                    )
                                }
                            </div>
                            <p className="text-gray-700 text-base mb-4">
                            {
                                edit ? (
                                    <>
                                        <input name="email" value={email} onChange={handleChange} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 border border-blue-400  active:bg-blue-700 focus:outline-none rounded-md focus:ring focus:ring-blue-300 mt-2 p-2 text-white">Done</button>
                                    </>
                                ) : currentUser.email 
                            }
                            </p>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-2">
                            <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">Gender</h5>
                            <p className="text-gray-700 text-base mb-4">
                                {currentUser.gender === 'male' ? 'M' : 'F'}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-2">
                            <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">Phone</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Phone nr: {currentUser.phone}, Cell nr: {currentUser.cell}
                            </p>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-2">
                            <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">Location</h5>
                            <p className="text-gray-700 text-base mb-4">
                                City: {currentUser.location.city},  Country: {currentUser.location.country}, Postcode: {currentUser.location.postcode}
                            </p>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-2">
                            <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">Nationality</h5>
                            <p className="text-gray-700 text-base mb-4">
                                {currentUser.nat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentUser