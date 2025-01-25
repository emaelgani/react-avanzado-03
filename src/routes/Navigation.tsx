import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (
    
    <Suspense fallback={<span>Loading...</span>}>
        {/* el fallback muestra un mensaje mientras carga el componente. */}
        <BrowserRouter>
        
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        {
                            routes.map(({to, name}) => (
                                <li>
                                    <NavLink key={to} to={to} className={ ({isActive}) => isActive ? 'nav-active' : '' } >{name}</NavLink>
                                </li>
                            ))
                        }
                    
                    </ul>
                </nav>

                <div className="content">
                <Routes>

                    {
                        routes.map(({to, path, Component}) => (
                            <Route key={to} path={path} element={<Component/>} />

                        ))
                    }

                    <Route path="*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
                </div>
            </div>
        
        </BrowserRouter>
    </Suspense>
  )
}
