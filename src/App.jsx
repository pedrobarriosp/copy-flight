import Divider from '@mui/material/Divider';
import FAQ_Accordion from './components/faq-accordion'
import Tips_Tabs from './components/tips-tabs'
import PopularRoutes_Grid from './components/popularRoutes-grid';
import Configuration_Footer from './components/setup-footer';
import Map_Navigation from './components/map-navigation';

function App() {

  return (
    <div>
      <div>
        <Map_Navigation/>
      </div>
      <Divider/>
      <div>
        <span>
          Useful tools to help you find the best deals
        </span>
        <Tips_Tabs/>
      </div>
      <Divider/>
      <div>
        <span>
          Frequently Asked Questions
        </span>
        <FAQ_Accordion/>
      </div>
      <Divider/>
      <div>
        <span>
          Find Cheap Flights on Popular Routes
        </span>
        <PopularRoutes_Grid/>
      </div>
      <Divider/>
      <div>
        <Configuration_Footer/>
      </div>
    </div>
  )
}

export default App
