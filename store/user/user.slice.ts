import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, login, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: localStorage?.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null,
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		}),
			builder.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			}),
			builder.addCase(register.rejected, state => {
				state.isLoading = false
			})
		builder.addCase(login.pending, state => {
			state.isLoading = true
		}),
			builder.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
			}),
			builder.addCase(login.rejected, state => {
				state.isLoading = false
			})
		builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
			state.user = payload.user
		})
	}
})
