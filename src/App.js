import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AppRoutes from './routes/AppRoutes'




function App() {

	const {i18n} = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('lang'))
	}, [i18n])
	
	return (
		<AppRoutes/>
		
	)
}

export default App
