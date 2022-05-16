import { configureStore } from '@reduxjs/toolkit'


import SIGNSlice from './reducers/signin'

const store = configureStore(
   
     {
        reducer: {
            Sign:SIGNSlice
        }
    }

   );

export default store ;