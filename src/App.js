import { useState, useEffect } from 'react';
import './App.css';
import image from './test.png';
import Cardlist from './components/card-list/card-list.compnent';



function App() {
  const [searchField, setSearchField] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState(data);

  useEffect(() => {
    fetch('https://myfakeapi.com/api/cars/name/Mitsubishi')
      .then(res => res.json())
      .then(json => {setData(json.Cars);
      })
      
  }, [])

  useEffect(() => {
    const newFilteredData = data.filter((data) => {
      return data.car.toLowerCase().includes(searchField) || data.car_model.toLowerCase().includes(searchField);
    });

    setFilterData(newFilteredData);
  }, [data, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <div className='navrenk'>
        <img src={image} alt="a" />
        <h1 className='baslik'>Mitsubishi Motors</h1>
        <input className='search'
        onChange={onSearchChange}
        placeholder='search model'
      />
        </div>
      <Cardlist filteredData= {filteredData}/>
    </div>
  );
}

export default App;
