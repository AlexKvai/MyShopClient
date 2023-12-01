import { createSlice } from '@reduxjs/toolkit'
import { register } from './user.actions'
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
	}
})
