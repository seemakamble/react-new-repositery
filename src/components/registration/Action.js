import { REGSIGNUP,REGLOGIN } from './ActionType';
  

export const RegSignUp=(sign)=>({
  type: REGSIGNUP,
  payload:sign,
});

export const REGLOGIN=(login)=>({
  type:REGLOGIN,
  payload:login,
});