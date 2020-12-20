import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {logout} from "../auth/loginSlice"

function DashBoard() {
  let history = useHistory()
  const LoginObj = useSelector((state) => state.login)
  let dispatch = useDispatch()

  useEffect(() => {
    document.title = '登录成功'
  }, [])
  useEffect(() => {
    if (!LoginObj.isLogin) {
      localStorage.removeItem('LoginStatus')
      history.replace('/login')
    }
  }, [LoginObj.isLogin, history])
  return (
    <div>
      <h2>这里是登录后页面</h2>
      <button onClick={() => dispatch(logout())}>退出</button>
    </div>
  )
}

export default DashBoard
