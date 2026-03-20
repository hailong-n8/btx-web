import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Liquidity from './pages/Liquidity'
import WhiteLabel from './pages/WhiteLabel'
import Markets from './pages/Markets'
import Web3 from './pages/Web3'
import Compliance from './pages/Compliance'
import Developers from './pages/Developers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <PageLayout>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="/white-label" element={<WhiteLabel />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/web3" element={<Web3 />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </PageLayout>
  )
}
