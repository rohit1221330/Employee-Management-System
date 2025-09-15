import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/Authprovider'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInuserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == 'admin123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }));
      } else {
        alert('invalid credentials')
      }
    }
    else {
      alert('invalid credentials')
    }
  }



  return (
    <>
      {/* {!user ? <Login setUser={setUser}/> : user.role === 'admin' ? <AdminDashboard user={user} setUser={setUser}/> : <EmployeeDashboard user={user} setUser={setUser}/>} */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInuserData} /> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
