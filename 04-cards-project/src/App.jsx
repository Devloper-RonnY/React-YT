import Card from './components/Card'
import {
    faAmazon,
    faMicrosoft,
    faGoogle,
    faApple
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className='parent'>
      <Card logo={faAmazon} company="Amazon" time="5 days ago" job="frontend devloper" salary={100} location="Mumbai, India"/>
      <Card logo={faApple} company="Apple" time="1 hour ago" job="Backend Devloper" salary={100} location="Banglore, India"/>
      <Card logo={faMicrosoft} company="Microsoft" time="just now" job="Full Stack Devloper" salary={120} location="Chennai, India"/>
      <Card logo={faGoogle} company="Google" time="2 days ago" job="AI Devloper" salary={220} location="Hydrabad, India"/>
    </div>
  )
}

export default App