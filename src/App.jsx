import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Transition from "./components/Transition"
import navData from "./components/NavData"
import Layout from "./components/Layout"

function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
          <motion.div className="min-h-screen" key={location.key}>
            <Transition/>
            <Routes>
              {navData.map((link, index) => {
                return <Route key={index} path={link.path} element={link.element} />
              })}
            </Routes>
          </motion.div>
        </AnimatePresence>
    </Layout>
  )
}

export default App
