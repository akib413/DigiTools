import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/MainSection/Cards'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const fetchPrice = async () => {
  const res = await fetch("/price.json")
  return res.json()
}

function App() {
  const dataPromise = fetchData()
  const pricePromise = fetchPrice()

  return (
    <>

    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Cards dataPromise={dataPromise}></Cards>
    </Suspense>
    <Steps></Steps>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Pricing pricePromise={pricePromise}></Pricing>
    </Suspense>
    <Workflow></Workflow>
    <Footer></Footer>

    </>
  )
}

export default App
