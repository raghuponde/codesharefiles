Go to the project which i had done yesterday Day12  on web api implementing identity with token and also take the front end from day 10 and try to connect 
from front end to back end 

so i am getting this error 

Request failed with status code 401
AxiosError: Request failed with status code 401
    at settle (http://localhost:3000/static/js/bundle.js:2186:12)
    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:823:66)
    at Axios.request (http://localhost:3000/static/js/bundle.js:1322:41)
ERROR
Request failed with status code 401
AxiosError: Request failed with status code 401
    at settle (http://localhost:3000/static/js/bundle.js:2186:12)
    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:823:66)
    at Axios.request (http://localhost:3000/static/js/bundle.js:1322:41)

I will not get this error if in the back end I remove authorised attribute So so now If to access with Authorize attibute controlelr u 
  have to write a  code or design for Auth  Controller I am having design for student controller only 

so go to chatgpt and tell 

for student controler in react i am mainting this code 

---->paste StudentService code with heading so that it knows what you are typing now 

---->Paste next studnet form and studentlist and App.js codes 

after pasting all code with proper headings write like this 

so this react code for the student web api now for this which u have given Authcontroller  i want code for that in react and it should connect studnet controller so i shoudl be able to logn and do register and in servcie chaneg the code as per authetication and authorization

Here AuthContoller code i had done by taking the help of chat gpt so i had written like that 

otherwise what u can do is 

  or 

Take all web api code including the fron end react code paste it and tell that for AuthContoller in the web api i want react code for that which is not 
there it should connect studnet controller so i shoudl be able to logn and do register and in service change the code as per authetication and authorization

Then chatgpt some ouptut put it and execute the code 

so now i am putting that code one by one and i will explain that code 

so u can see i cannot touch web api I am getting 401 error what to do let us start 

Now i had opened my studentapp react and as u know i had done changes in web api of student so AuthController is added
so any one who wants to use my web api whether through a swagger or through a a react interface it will give 401 error 
means u have to be authenticated user otherwise u cannot access me as i had kept an atrribute [Authorize] on top of the 
students controller he has to first login and provide the token 

now when i am accessing it through a react i am getting error of 401 so in react also i need to write some service 
for AuthController 

npm i react-router-dom@6.4.3   also install this package 




so let us proceed with the changes and steps to follow 





1)Create an Authentication Service for handling login, registration, and storing JWT tokens.
2)Modify the Student Service to include JWT in API requests.
3)Create Login and Register components.
4)Modify the App component to handle authentication state.
5)Protect the Student Management Pages to be accessed only by authenticated users.


now add one class in service folder AuthService.js 

1)AuthService.js (src/services/AuthService.js)
--------------------------------------------
import axios from 'axios';

const API_URL = 'https://localhost:7272/api/Auth';

class AuthService {
    register(userData) {
        return axios.post(`${API_URL}?role=${userData.role}`, userData);
        // Sending role as query parameter instead of in request body
    }

    login(userData) {
        return axios.post(API_URL + '/login', userData)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();

Modify the Student Service to Include JWT Authentication
Modify src/services/StudentService.js to include JWT token in API requests.

2)StudentService.js 
-----------------------
import axios from 'axios';
import AuthService from './AuthService';

const API_URL = 'https://localhost:7272/api/Students/';

class StudentService {
    getAuthHeader() {
        const user = AuthService.getCurrentUser();
        if (user && user.token) {
            return { Authorization: 'Bearer ' + user.token };
        } else {
            return {};
        }
    }

    getAllStudents() {
        return axios.get(API_URL, { headers: this.getAuthHeader() });
    }

    getStudentById(id) {
        return axios.get(API_URL + id, { headers: this.getAuthHeader() });
    }

    createStudent(formData) {
        return axios.post(API_URL, formData, {
            headers: {
                ...this.getAuthHeader(),
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    updateStudent(id, formData) {
        return axios.put(API_URL + id, formData, {
            headers: {
                ...this.getAuthHeader(),
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    deleteStudent(id) {
        return axios.delete(API_URL + id, { headers: this.getAuthHeader() });
    }
}

export default new StudentService();


3)Create Login Component
Create src/components/Login.js

Login.js 
----------
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login({ username, password }) // Use `username` instead of `email`
            .then(response => {
                setAuthUser(AuthService.getCurrentUser());
                alert('Login successful!');
                navigate('/students');
            })
            .catch(error => {
                alert('Invalid credentials');
            });
    };

    return (
        <div className="container mt-4 p-4 border rounded bg-light">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;


create Register component 
Create src/components/Register.js

Register.js 
------------
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User'); // Default role is "User"
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
            role  // Role is included here
        };

        AuthService.register(userData)
            .then(response => {
                alert(`User registered successfully as ${role}! Please login.`);
                navigate('/login');
            })
            .catch(error => {
                alert(error.response?.data?.message || 'Registration failed. Please try again.');
            });
    };

    return (
        <div className="container mt-4 p-4 border rounded bg-light">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Role</label>
                    <select
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="User">User</option> 
                        <option value="Admin">Admin</option>
                        <option value="HR">HR</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;

4)Now modify App.js to handle authentication 

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Login from './components/Login';
import Register from './components/Register';
import AuthService from './services/AuthService';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [authUser, setAuthUser] = useState(AuthService.getCurrentUser());

  const refreshStudents = () => {
    setSelectedStudent(null);
    setEditMode(false);
  };

  const handleLogout = () => {
    AuthService.logout();
    setAuthUser(null);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Student Portal</Link>
          <div className="navbar-nav ml-auto">
            {!authUser ? (
              <>
                <Link className="nav-item nav-link" to="/login">Login</Link>
                <Link className="nav-item nav-link" to="/register">Register</Link>
              </>
            ) : (
              <>
                <Link className="nav-item nav-link" to="/students">Students</Link>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={authUser ? (
            <>
              <StudentForm selectedStudent={selectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
              <StudentList setSelectedStudent={setSelectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
            </>
          ) : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

Steps to convert the studentapp to use redux 
********************************************
Install Redux Packages

--->npm install @reduxjs/toolkit react-redux

--->Set up Redux Store and Slices

/src
 ├── /redux
 │    ├── store.js
 │    ├── /slices
 │    │    ├── authSlice.js
 │    │    ├── studentSlice.js
 ├── /services
 ├── /components
 ├── App.js


--->Modify Components to Use Redux State and Dispatch Actions

1. Create Redux Store (store.js)
-----------------------------------
Create the Redux store and combine all slices.

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import studentReducer from "./slices/studentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },
});

export default store;

2. Create Auth Slice (authSlice.js)
-----------------------------------
Manages user authentication and token storage.

import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await AuthService.login(userData);
    dispatch(loginSuccess(response));
  } catch (error) {
    alert("Login failed! Check credentials.");
  }
};

export const logoutUser = () => (dispatch) => {
  AuthService.logout();
  dispatch(logout());
};

export default authSlice.reducer;


3. Create Student Slice (studentSlice.js)
------------------------------------------
Handles CRUD operations for students.


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "../../services/StudentService";

// Async actions
export const fetchStudents = createAsyncThunk("students/fetchAll", async () => {
    const response = await StudentService.getAllStudents();
    return response.data;
});

export const addStudent = createAsyncThunk("students/add", async (formData) => {
    await StudentService.createStudent(formData);
    return formData;
});

export const updateStudent = createAsyncThunk("students/update", async ({ id, formData }) => {
    await StudentService.updateStudent(id, formData);
    return { id, formData };
});

export const deleteStudent = createAsyncThunk("students/delete", async (id) => {
    await StudentService.deleteStudent(id);
    return id;
});

// Student slice
const studentSlice = createSlice({
    name: "students",
    initialState: { students: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.students.push(action.payload);
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                const index = state.students.findIndex((s) => s.id === action.payload.id);
                if (index !== -1) {
                    state.students[index] = action.payload.formData;
                }
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.students = state.students.filter((s) => s.id !== action.payload);
            });
    },
});

export default studentSlice.reducer;

4. Update Components to Use Redux
-------------------------------------
Modify Login.js to use Redux.

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ username, password }));
        navigate("/students");
    };

    return (
        <div className="container mt-4 p-4 border rounded bg-light">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;

StudentList.js 
-----------------

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/slices/studentSlice";

const StudentList = ({ setEditMode, setSelectedStudent }) => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="container mt-4">
      <h2>Student List</h2>
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-3" key={student.id}>
            <div className="card h-100">
              <img src={student.imageUrl ? `https://localhost:7272${student.imageUrl}` : ''} className="card-img-top" alt="Student" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">{student.email}</p>
                <p className="card-text">{student.address}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-warning" onClick={() => { setSelectedStudent(student); setEditMode(true); }}>Edit</button>
                <button className="btn btn-danger" onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;

App.js (Modify App.js to wrap the app with the Redux Provider.)
------------------------------------------------------------------
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import StudentList from "./components/StudentList";
import Login from "./components/Login";
import Register from "./components/Register";
import { logoutUser } from "./redux/slices/authSlice";

const AppContent = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={user ? <StudentList /> : <Navigate to="/login" />} />
      </Routes>
      {user && <button onClick={() => dispatch(logoutUser())}>Logout</button>}
    </Router>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;






            

