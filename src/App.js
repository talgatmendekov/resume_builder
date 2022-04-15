import './App.css'
import React from 'react'
import Template from './components/Template'
import Basic from './components/Left/Basic'
import Right from './components/Right/Right'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Left/Header'
import Experience from './components/Left/Experience'
import Skills from './components/Left/Skills'
import Education from './components/Left/Education'




function App() {
	
	return (
		<div className='app'>
	
			<Routes>
				<Route path='/' element={<Template/>}/>
				
				<Route path='basic' element={<Basic/>}>
					<Route path='header' element={<Header/>}/>
					<Route path='education' element={<Education/>}/>
					<Route path='experience' element={<Experience/>}/>
					<Route path='skills' element={<Skills/>}/>
				</Route>
			</Routes>
		<Right/>

		</div>
	)
}

export default App
