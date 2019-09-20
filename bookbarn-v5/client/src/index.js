import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import BaseLayout from './components/BaseLayout';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
//can name import reducer anything you want
import counterReducer from './store/reducers/counter';
import authenticateReducer from './store/reducers/reducer';
import Login from './components/Login';
import { setAuthenticationHeader} from './utils/authenticate'
import requireAuth from './components/requireAuth'
import MyBooks from './components/MyBooks'

const rootReducer = combineReducers({
    ctrRed: counterReducer,
    authRed: authenticateReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// get the token
let token = localStorage.getItem('jsonwebtoken')
// and attach it to the header
setAuthenticationHeader(token)

ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <BaseLayout>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/books" component={BookList} />
            <Route path="/add-book" component={AddBook} />
            <Route path="/update-book/:bookId" component={UpdateBook} />
            <Route path="/login" component={Login} />
            <Route path="/my-books" component={requireAuth(MyBooks)} />
            
        </Switch>
    </BaseLayout>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
