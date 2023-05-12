import { USER_ACCESS } from "../constant"

export const UserAccessaction = (Token) => {
  return {
    type : USER_ACCESS,
    payload : Token 
  }
}