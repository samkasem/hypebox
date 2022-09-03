import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const signin = (formData, nav) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    dispatch({ type: AUTH, data })
    nav('/', { replace: true })
  } catch (error) {
    console.log(error)
  }
}

export const signup = (formData, nav) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: AUTH, data })
    nav('/', { replace: true })
  } catch (error) {
    console.log(error)
  }
}
