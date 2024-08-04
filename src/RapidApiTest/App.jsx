import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const options = {
  method: 'POST',
  url: 'https://recipe-food-nutrition15.p.rapidapi.com/nutrition-details',
  headers: {
    'x-rapidapi-key': 'ea737466e8mshf580418c5fb2c26p173266jsn0c113a9a1e3c',
    'x-rapidapi-host': 'recipe-food-nutrition15.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    ingredients: [
      '1 cup rice',
      '10 oz chickpeas'
    ]
  }
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Recipe Nutrition Details</h1>
      <p>Calories: {data.calories}</p>
      <p>Total Weight: {data.totalWeight} g</p>
      <h2>Diet Labels</h2>
      <ul>
        {data.dietLabels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
      <h2>Health Labels</h2>
      <ul>
        {data.healthLabels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
      <h2>Ingredients</h2>
      <ul>
        {data.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <h1>{data.uri}</h1>
      
    </div>
  );
}

export default App;
