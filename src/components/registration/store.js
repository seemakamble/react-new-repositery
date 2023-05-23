import  DataReducer  from './UserData/DataReducer'
import { configureStore} from '@reduxjs/toolkit'

import {RegReducer} from './RegReducer'

export const store = configureStore({reducer: RegReducer})
