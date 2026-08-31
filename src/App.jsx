import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/MainSection/Cards'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'

const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const dataPromise = fetchData()

  return (
    <>

    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Cards dataPromise={dataPromise}></Cards>
    </Suspense>
    <Steps></Steps>

    </>
  )
}

export default App
