
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainHome from './pages/MainHome'
import ParagraphGenerator from './pages/paragraphGenerator/ParagraphGenerator'
import EducationPlanner from './pages/educationPlanner/EducationPlanner'

import './App.css'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />

        <Route path='/paragraph-generator' element={<ParagraphGenerator />} />
        <Route path='/education-planner' element={<EducationPlanner />} />

      </Routes>
      <Toaster />

    </>
  )
}

export default App
