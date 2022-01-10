import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login'
import Create from './create'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from '../config/store'
const {store, persistor} = configureStore();

export default function Home() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Login/>
      </PersistGate>
    </Provider>
    
  )
}
