import { useContext } from 'react'
import { State } from '../../state/UserState.js'

export default function useUserContext () {
   return useContext(State)
}