import { StyledMapContainer } from './App.css'
import GlobalStyle from './Global.css'
import Map from './components/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledMapContainer>
        <Map />
        <div className='sf-la'></div>
        <div className='LA'>
          <FontAwesomeIcon icon={faStar} />
          <p>Los<br/>Angeles</p>
        </div>
      </StyledMapContainer>
    </>
  )
}

export default App
