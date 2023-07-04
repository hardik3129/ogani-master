import { USER_ACCESS, USER_EMAIL } from "../constant"

export const UserAccessaction = (Token) => {
  return {
    type : USER_ACCESS,
    payload : Token 
  }
}

export const UserEmailaction = (userEmail) => {
  return {
    type : USER_EMAIL,
    payload : userEmail
  }
} 