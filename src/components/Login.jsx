import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function Login() {
  let history = useHistory()
  let status = localStorage.getItem('LoginStatus')
  console.log('Login:从localStorage获取的状态为', status)
  if (status === null || status === 'false') {
    status = false
  } else {
    status = true
  }
  const [LoginStatus, setLoginStatus] = useState(status)
  useEffect(() => {
    document.title = '登录页'
  })
  useEffect(() => {
    localStorage.setItem('LoginStatus', LoginStatus)
    if (LoginStatus) {
      history.push('/dashBoard')
    }
  }, [LoginStatus, history])
  function handleLoginClick() {
    setLoginStatus(true)
  }
  return (
    <div>
      <h2>这里是login页面</h2>
      <button onClick={handleLoginClick}>登录</button>
    </div>
  )
}
export default Login
