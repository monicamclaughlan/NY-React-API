import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Nav from './components/Nav'
import Main from './pages/Main'
import ReadingList from './pages/ReadingList'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'



function App() {
  const apiKey = "eNetSKoCDjuFllCX5kndIoGNknTPGYXj"
    
    const [list, setList] = useState([])

    const [review, setReview] = useState([])

    const [readinglist, setReadingList] = useState([])

    const addToReadingList = (bookimage) => { 
      setReadingList([...readinglist, bookimage])
  }



  return (
    <div className="App">
      <nav><Nav /></nav> 
          <Switch>
            <Route path exact ="/">
                <Main list={list} setReview={setReview} setList={setList} addToReadingList={addToReadingList}/>
            </Route>
            <Route path="/Reviews">
              <Reviews review={review}/>
            </Route>
            <Route path="/ReadingList">
              <ReadingList readinglist={readinglist}/>
            </Route>
          </Switch>
          <footer><Footer /></footer>
    </div>
  );
}

export default App;
