import './App.css';

function App() {
  const apiKey = "eNetSKoCDjuFllCX5kndIoGNknTPGYXj"

  const genre = [
    {name: 'mass-market-paperback'}, 
    {name: 'paperback-nonfiction'}, 
    {name: 'paperback-advice'}, 
    {name: 'crime-and-punishment'}
  ]

  const listurl = genre.map((name) => { 
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${name.name}.json?api-key=${apiKey}` 
  })

  const reviewurl= `https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=${apiKey}`

  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${genre.name}.json?api-key=${apiKey}` 



  const getList = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results.books[0].title)
  }

  const getReview = async () => { 
    const response = await fetch(reviewurl)
    const data = await response.json()
    console.log(data.results[0].summary)
  }



  return (
    <div className="App">

    </div>
  );
}

export default App;
