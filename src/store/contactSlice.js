import {createSlice, nanoid} from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    createContact: (state, action) => {
      const id = nanoid()
      state.push({...action.payload, id})
    },
    updateContact: (state, action) => {
      const newState = state.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload
        }
        return contact
      })
      return newState
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload)
    },
  },
})

export default contactSlice.reducer
export const {createContact, updateContact, deleteContact} =
  contactSlice.actions
