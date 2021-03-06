import React, {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import '../App.css'
import Loader from '../components/UI/Loader'

const Template = React.lazy(()=> import('../components/Template'))
const Basic = React.lazy(()=> import('../components/Left/Basic'))
const Header = React.lazy(()=> import('../components/Left/Header'))
const Experience = React.lazy(()=> import('../components/Left/Experience'))
const Skills = React.lazy(()=> import('../components/Left/Skills'))
const Education = React.lazy(()=> import('../components/Left/Education'))
const Right = React.lazy(()=> import('../components/Right/Right'))
const Finalize = React.lazy(()=> import('../components/Finalize'))
const AppRoutes = () => {
  return (
      <Suspense fallback={<Loader/>}>
    <div className='app'>
	
			<Routes>
				<Route path='/' element={<Template/>}/>
				
				<Route path='basic' element={<Basic/>}>
					<Route path='header' element={<Header/>}/>
					<Route path='education' element={<Education/>}/>
					<Route path='experience' element={<Experience/>}/>
					<Route path='skills' element={<Skills/>}/>
					
				</Route>
				<Route path='/finalize' element={<Finalize/>}/>
			</Routes>
		<Right/>

		</div>
        </Suspense>
  )
}

export default AppRoutes