import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';

const RouterLinks = (): React.ReactNode => {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<SharedLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterLinks