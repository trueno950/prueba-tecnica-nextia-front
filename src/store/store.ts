import type { PreloadedState } from '@reduxjs/toolkit'
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import authReducer from '@/store/auth/authSlice'
import toastReducer from '@/store/toast/toastSlice'
import userReducer from '@/store/user/userSlice'
import invitationReducer from '@/store/invitation/invitationSlice'

export const reducers = {
  auth: authReducer,
  invitation: invitationReducer,
  toast: toastReducer,
  user: userReducer,
}

const rootReducer = combineReducers(reducers)

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
