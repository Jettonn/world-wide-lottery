import { NavLink } from 'react-router-dom'

//routes
import routes from './routes'

function Navbar(){
    return (
        <nav>
            <div className="links flex items-center justify-center mb-3">
                {
                    routes.map(route => {
                      return(
                        <NavLink to={route.path} key={route.name} activeClassName="!text-cyan-700 font-semibold" className="mx-1 p-3 text-slate-500">
                            {route.name}
                        </NavLink>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar