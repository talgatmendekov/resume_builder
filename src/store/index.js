import { configureStore } from '@reduxjs/toolkit'
import builderSlice from './builderSlice'


const store = configureStore({
	reducer: { builder: builderSlice.reducer},
})

export default store
