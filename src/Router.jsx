import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Sobre } from './Pages/Sobre';
import { Login } from './Pages/Login';
import { Cadastro } from './Pages/Cadastro';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/sobre' element={<Sobre />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/cadastro' element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;