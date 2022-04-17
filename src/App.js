import './App.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Template from './components/Template'
import Basic from './components/Left/Basic'
import Right from './components/Right/Right'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Left/Header'
import Experience from './components/Left/Experience'
import Skills from './components/Left/Skills'
import Education from './components/Left/Education'




function App() {

	const {i18n} = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('lang'))
	}, [i18n])
	
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
