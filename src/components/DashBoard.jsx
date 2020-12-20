import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function DashBoard() {
  let history = useHistory()
  let status = localStorage.getItem('LoginStatus')
  console.log('DashBoard:从localStorage获取的状态为', status)
  if (status === null || status === 'false') {
    console.log('DashBoard:未登录')
    status = false
  } else {
    console.log('DashBoard:已登录')
    status = true
  }
  const [LoginStatus, setLoginStatus] = useState(status)
  useEffect(()=>{
      document.title="登录成功"
  },[])
  useEffect(() => {
    if (!LoginStatus) {
      localStorage.removeItem('LoginStatus')
      history.replace('/login')
    }
  }, [LoginStatus, history])
  return (
    <div>
      <h2>这里是登录后页面</h2>
      <button onClick={() => setLoginStatus(false)}>退出</button>
    </div>
  )
}

export default DashBoard
