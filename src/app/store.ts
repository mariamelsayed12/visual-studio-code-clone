import { configureStore } from '@reduxjs/toolkit'

import fileTreeSlice from './features/fileTreeSlice'
// ...

export const store = configureStore({
  reducer: {
    fileTree:fileTreeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch