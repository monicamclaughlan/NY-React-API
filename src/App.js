import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Nav from './components/Nav'
import Main from './pages/Main'
import ReadingList from './pages/ReadingList'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'
import Categories from './components/Categories';


function App() {
  const apiKey = "eNetSKoCDjuFllCX5kndIoGNknTPGYXj"

    const reviewurl= `https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=${apiKey}`

    const [list, setList] = useState([])

    const [review, setReview] = useState([])


  const getReview = async () => { 
    const response = await fetch(reviewurl)
    const data = await response.json()
    console.log(data.results[0].summary)
  }



  return (
    <div className="App">
          <Nav />
          <Categories setList={setList} /> 
          <Switch>
            <Route path exact ="/">
                <Main list={list} setReview={setReview}/>  
                 
            </Route>
            <Route path="/Reviews">
              <Reviews review={review}/>
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
