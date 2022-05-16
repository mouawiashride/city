import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'












// SIGNIN API
export const Contactus = createAsyncThunk(
  "SIGN/Contactus",
  async  ({email,message}) =>{
   return  await fetch("http://city.icrcompany.net/api/pushMessage",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      email,message
    })
})
.then( res=> res.json() )
.then((res)=> res)
.catch((error)=> error.message)

  }
);

















export const fetchData = createAsyncThunk(
  'SIGN/fetchData',
  async  (token) =>{
    return  await fetch("http://city.icrcompany.net/api/getUserInfo",
 {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     }
    
 })
 .then( res=> res.json() )
 .then((res)=> res)
 .catch((error)=> error.message)
 
   }
 );








//  SIGNUP API
export const fetchSignUP = createAsyncThunk(
  'SIGN/fetchSignUP',
  async  ({email,password,username,birthday}) =>{
    return  await fetch("http://city.icrcompany.net/api/signup",
 {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: "POST",
     body: JSON.stringify({
      username,email,password,birthday
     })
 })
 .then( res=> res.json() )
 .then((res)=> {    localStorage.setItem('token', res.token);  return res})


 .catch((error)=> error.message)
 
   }
 );








// SIGNIN API
export const fetchSignIN = createAsyncThunk(
  "SIGN/fetchSignIN",
  async  ({email,password}) =>{
   return  await fetch("http://city.icrcompany.net/api/signin",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      email,password
    })
})
.then( res=> res.json() )
.then((res)=> { 
  console.log(res);
  localStorage.setItem('token', res.token);
  return res})
.catch((error)=> error.message)

  }
);




const initialState ={
  token:   localStorage.getItem('token') ?  localStorage.getItem('token') : null  ,
  logedin:false,
  datatemp: null,
  data: null,
  error: null,
}

const SIGNSlice = createSlice({
  name: 'SIGN',
  initialState,
  reducers: {
    logout : (state, action) => {
   return {
     ...state,
     token:null,
     logedin:false,
     data:{}
   }
   
    
    }
  },
  extraReducers:{
    
    [fetchSignIN.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        datatemp: action.payload,
        data: {},
      
        error: action.payload,
      }
    },
    [fetchSignIN.fulfilled]: (state, action) => {
     return {
       ...state,
       token:action.payload.token,
       sign:true,
       loading: false,
    
       datatemp: action.payload,
        data: {},
        error: {},
      }
    }
    ,
    [fetchSignIN.pending]: (state) => {
     return {
       ...state,
        loading: true,
        data: {},
      
        error: {},
      };
    },



    [fetchSignUP.fulfilled]: (state, action) => {
      return {
        ...state,
        token:action.payload.token,
        datatemp: action.payload,
        loading: false,
        data: {},
      
        error: {},
       }
     }
     ,
     [fetchSignUP.pending]: (state,action) => {
      return {
        ...state,
        loading: true,
        datatemp: {},
        error: action.payload,
       };
     },
     [fetchSignUP.rejected]: (state, action) => {
         return {
          ...state,
          loading: false,
          datatemp: {},
          data: {},
         
          error: action.payload,
         }
       },









       [fetchData.fulfilled]: (state, action) => {
        return {
          ...state,
           logedin:true,
           loading: false,
           data: action.payload,
           error: {},
         }
       }
       ,
       [fetchData.pending]: (state,action) => {
        return {
          ...state,
           loading: true,
           data: {},
           error: {},
         };
       },
       [fetchData.rejected]: (state, action) => {
           return {
            ...state,
            loading: false,
             data: {},
             error: action.payload,
           }
         },






         [Contactus.fulfilled]: (state, action) => {
          return {
            ...state,
             loading: false,
             error: {},
           }
         }
         ,
         [Contactus.pending]: (state,action) => {
          return {
            ...state,
             data: {},
             error: {},
           };
         },
         [Contactus.rejected]: (state, action) => {
             return {
              ...state,
              loading: false,
               data: {},
               error: action.payload,
             }
           },








  }
})



export const { logout } = SIGNSlice.actions

export default SIGNSlice.reducer







