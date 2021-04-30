import './App.css';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Main from './pages/Main'
import ReadingList from './pages/ReadingList'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'

function App() {
  const apiKey = "eNetSKoCDjuFllCX5kndIoGNknTPGYXj"

  const genre = {
    fiction: 'mass-market-paperback', 
    nonfiction: 'paperback-nonfiction', 
    selfhelp: 'paperback-advice', 
    crime: 'crime-and-punishment'
}

    const fictionurl = `https://api.nytimes.com/svc/books/v3/lists/current/${genre.fiction}.json?api-key=${apiKey}` 
    const nonfictionurl = `https://api.nytimes.com/svc/books/v3/lists/current/${genre.nonfiction}.json?api-key=${apiKey}`
    const selfhelpurl = `https://api.nytimes.com/svc/books/v3/lists/current/${genre.selfhelp}.json?api-key=${apiKey}`
    const crimeurl = `https://api.nytimes.com/svc/books/v3/lists/current/${genre.crime}.json?api-key=${apiKey}`
  
    const reviewurl= `https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=${apiKey}`


  const getFiction = async () => {
    const response = await fetch(fictionurl)
    const data = await response.json()
    console.log(data.results)
  }

  const getNonfiction = async () => {
    const response = await fetch(nonfictionurl)
    const data = await response.json()
    console.log(data.results)
  }

  const getHelp = async () => {
    const response = await fetch(selfhelpurl)
    const data = await response.json()
    console.log(data.results)
  }

  const getCrime = async () => {
    const response = await fetch(crimeurl)
    const data = await response.json()
    console.log(data.results)
  }

  const getReview = async () => { 
    const response = await fetch(reviewurl)
    const data = await response.json()
    console.log(data.results[0].summary)
  }



  return (
    <div className="App">
          <Nav />
          <Switch>
            <Route exact path ="/">
                <Main />    
            </Route>
            <Route path="/Reviews">
              <Reviews />
            </Route>
            <Route path="/ReadingList">
              <ReadingList/>
            </Route>
          </Switch>
          <Footer />
    </div>
  );
}

export default App;
