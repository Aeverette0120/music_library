import { 
  useRef,
   useState 
  } from "react"
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { DataContext } from './contexts/DataContext';
import { SearchContext } from './SearchContext';
import './App.css';

const App =() => {
  const [message, setMessage] = useState ('Search for Music!')
  const [data, setData] =  useState ([])

  let searchInput = useRef('');

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
        document.title = `${term} Music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        if (resData.results.length > 0) {
            return setData(resData.results)
        } else {
            return setMessage('Not Found.')
        }
    }
    fetchData()
}

  return (
    <div className="App">
<SearchContext.Provider value={{
  term: searchInput,
  handleSearch: handleSearch
}}>
      <SearchBar handleSearch={handleSearch} />
      </SearchContext.Provider>
      {/* <button onClick={ () => clearResults()}>Clear</button> */}
      { message }
      <DataContext.Provider value={data}>
      <Gallery data={data} />
      </DataContext.Provider>
      
      
    </div>
  );
}

export default App;
