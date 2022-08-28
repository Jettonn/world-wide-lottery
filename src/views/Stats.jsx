import { useSelector } from 'react-redux'
import { useState } from 'react'

function Stats(){
    const [sort, setSort] = useState('desc')
    const users = useSelector((state) => state.users.users)
    const groupBy = users.reduce((p, c) => {
        const nationality = c.nat
        if (!p.hasOwnProperty(nationality)) {
            p[nationality] = 0;
          }
          p[nationality]++
          return p
    }, {})
    const groupedNationalities = Object.keys(groupBy).map(k => { return {name: k, count: groupBy[k]}; })
    const sortedNationalities = groupedNationalities.sort(function(a, b){return sort === 'asc' ? a.count - b.count : b.count - a.count})
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
                                        Nationality
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Number of people
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                        {
                            sortedNationalities.map(nationality => {
                                return(
                                    <tr className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100`}>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div className="ml-3 overflow-hidden flex items-center">
                                            <img className="h-10 w-10 rounded-full" src={`https://countryflagsapi.com/png/${nationality.name}`} alt={nationality.name} />
                                            <p className=" ml-4 text-lg text-slate-500">{nationality.name}</p>
                                        </div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div className="ml-3 overflow-hidden">
                                            <p className="text-sm text-slate-500">{nationality.count}</p>
                                        </div>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        
                        {
                            sortedNationalities.length === 0 && (
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

export default Stats