import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productget } from '../../Api/Home/HomeApi'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const categories = [
  'Jacky Vista',
  'Morar Fort',
  'Myrna Loop',
  'Fernando Islands',
  'Simeon Camp'
]

const Product = () => {

  const dispatch = useDispatch()
  const Product = useSelector((store) => store.Home.producties)
  console.log(Product);


  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(age);
  useEffect(() => {
    dispatch(productget('?category=' + age))
  }, [dispatch, age])

  return (
    <div className='flex ml-[50px]'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {categories.map((el, ind) => {

            return <MenuItem key={ind} value={el}>{el}</MenuItem>
          })}
        </Select>
      </FormControl>
      <div className='flex flex-wrap items-start text-[#000] dark:text-[#fff] justify-start gap-[100px] px-[150px] mt-[100px]'>
        {
          Product?.map((elem) => {
            return (
              <Link to={`info/${elem.id}`}>
                <div key={elem.id} className="grid-rows-4 border-[1px] hover:bg-gray-200 border-gray-300 hover:shadow-xl shadow-indigo-500/40 w-[200px] text-center h-[35vh] rounded-b-lg dark:hover:bg-[#272727] dark:border-black">
                  <img src={elem.avatar} className="w-[200px]" alt="" />
                  <h1 className="mt-[15px]" >{elem.title}</h1>
                  <p>{elem.price}</p>
                  <h2><span className="text-gray-600">Brand :</span> {elem.brand}</h2>
                  <p>{elem.category}</p>
                </div>
              </Link>
            )
          })
        }
      </div>

    </div>
  )
}

export default Product