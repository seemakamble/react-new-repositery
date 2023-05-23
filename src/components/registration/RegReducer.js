import React from 'react';
import {REGSIGNUP} from  './ActionType'


const initialState ={
  users:[],
};
export const RegReducer=(state=initialState,action)=>{
  switch(action.type){
    case REGSIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
      default:return state
  }
}