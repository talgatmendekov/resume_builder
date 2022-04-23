import { configureStore } from '@reduxjs/toolkit'
import builderSlice from './builderSlice'
import saveSlice from './saveSlice'


const store = configureStore({
	reducer: { builder: builderSlice.reducer, save: saveSlice.reducer},
})

export default store
