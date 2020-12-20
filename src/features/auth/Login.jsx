import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './loginSlice'

function Login() {
  let history = useHistory()
  const LoginObj = useSelector((state) => state.login)
  const dispatch = useDispatch()
  // console.log('LoginObj:', LoginObj)
  // console.log(counterSlice.actions.increment()),
    useEffect(() => {
      document.title = '登录页'
      console.log('useEffect,title')
    }, [])
  useEffect(() => {
    if (LoginObj.isLogin) {
      history.push('/dashBoard')
    }
  }, [LoginObj.isLogin, history])
  const handleLoginClick = () => {
    dispatch(login())
  }
  return (
    <div>
      <h2>这里是login页面</h2>
      <button onClick={handleLoginClick}>登录</button>
    </div>
  )
}
export default Login
