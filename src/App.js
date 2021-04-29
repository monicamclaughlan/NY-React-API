import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey = "eNetSKoCDjuFllCX5kndIoGNknTPGYXj"
  const genre ={ 
    fiction: 'mass-market-paperback', 
    nonfiction: 'paperback-nonfiction', 
    advice: 'paperback-advice', 
    truecrime: 'crime-and-punishment'
  }

  const url= `https://api.nytimes.com/svc/books/v3/lists/current/${genre.fiction}.json?api-key=${apiKey}`

  console.log(genre.fiction)

  const getFiction = async () => { 
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results.books[0].title)
  }

  getFiction()

  return (
    <div className="App">

    </div>
  );
}

export default App;
