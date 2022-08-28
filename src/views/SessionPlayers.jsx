import { useSelector } from 'react-redux'
import { useState } from 'react'

function SessionPlayers(){
    const [sort, setSort] = useState('desc')
    const users = useSelector((state) => state.users.users)
    const sortedUsers = sort === 'desc' ? [...users].reverse() : [...users]

    const changeSort = () => {
        if(sort === 'asc') setSort('desc')
        else setSort('asc')
    }

    return (
        <>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="flex justify-end mx-4">
                        <button
                            className='py-1 px-4 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
                            onClick={ changeSort }>
                            Sort {sort === 'asc' ? 'Descending' : 'Ascending'}
                        </button>
                    </div>
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        User
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Phone
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Country
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Gender
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Times Played
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                        {
                            sortedUsers.map(user => {
                                return(
                                    <tr className={`${user.isWinner ? "bg-green-50" : "bg-white"} border-b transition duration-300 ease-in-out hover:bg-gray-100`} key={user.fullname}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <img className="h-10 w-10 rounded-full" src={user.picture} alt={user.fullname} />
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3 overflow-hidden">
                                                <p className="text-sm font-medium text-slate-900">{user.fullname}</p>
                                                <p className="text-sm text-slate-500 truncate">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3 overflow-hidden">
                                                <p className="text-sm text-slate-500">Phone: {user.phone}</p>
                                                <p className="text-sm text-slate-500">Cell: {user.cell}</p>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3 overflow-hidden">
                                                <p className="text-sm text-slate-500">{user.location.country}</p>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3 overflow-hidden">
                                                <p className="text-sm text-slate-500">{user.gender === 'male' ? 'M' : 'F'}</p>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3 overflow-hidden">
                                                <p className="text-sm text-slate-500">{user.timesPlayed}</p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                        {
                            users.length === 0 && (
                                <tr className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100`}>
                                    <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                        No players yet!
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default SessionPlayers