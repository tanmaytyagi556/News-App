import {useState, useEffect} from 'react';
import './App.css';
import News from './newsC';




function App() {

  const [news, setNews] = useState([])

  const [s1, sets1] = useState(0)

  const [search , setSearch] = useState('')
  const [query, setQuery] = useState('Apple')

  const [hdline, setHdline] = useState('everything?')

  function sethandle(e){
    sets1(s1*2)
  }

  useEffect(() =>{
    getNews()
  },[query]);

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    console.log(search);
  }


  var API_KEY = `76446f84f32a41708b7a9f7172fa68f9`
  const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/${hdline}qInTitle=${query}&from=2021-10-08&sortBy=popularity&apiKey=76446f84f32a41708b7a9f7172fa68f9`)
    const data = await response.json()
    setNews(data.articles)
    console.log(data.articles)
  }

  const headline = () => {
    setHdline('top-headlines?')
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="App">

    <div className = 'header'>
      <h1> WORLD NEWS </h1>

      <div className = 'nav'>
        <ul>
          <li> Bookmarks </li>
          <li> Contacts </li>
          <li> Return </li>
        </ul>
      </div>

    </div>
        <div className = 'headline' onClick = {headline}>Headlines</div>



        <form onSubmit = {getSearch}>

          <input type = 'text'
          className = 'search'
          id = 'search'
          placeholder = 'search'
          value = {search}
          onChange = {updateSearch} />
          <label for = 'search'> Search </label>
        </form>
      

      {news.map( newsI => (
        <News
        //article = {newsI.articles}
        author = {newsI.author}
        title = {newsI.title}
        image = {newsI.urlToImage}
        content = {newsI.content}
        url = {newsI.url}
        />))}
    </div>
  );
}

export default App;
