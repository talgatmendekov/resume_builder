import { configureStore } from '@reduxjs/toolkit'
import builderSlice from './builderSlice'
import profSlice from './profSlice'

const store = configureStore({
	reducer: { builder: builderSlice.reducer, prof: profSlice.reducer },
})

export default store
