import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Concluidas from './pages/Concluidas'
import TaskApp from './pages/TaskApp'


function AppRoutes() {
    const [notasAdicionadas, setNotasAdicionadas] = React.useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TaskApp />} />
                <Route path='/adicionadas' element={<Adicionadas notasAdicionadas={notasAdicionadas} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes