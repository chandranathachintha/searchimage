import './App.css';
import {useState} from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      (res)=>setData(res.data.photos.photo))
    
  }
  return (
    <div>
      <center>
      <h1>Images</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='img title enter here'  value={search} onChange={(e)=>setSearch(e.target.value)} className='input-group input-group-sm w-25'></input> 
        <input type='submit' name='Search' className='btn btn-primary btn-sm'></input>
        
      </form>
      {
        <Gallery data={data}/>
      }
      
    </center>
    </div>
  );
}

export default App;
