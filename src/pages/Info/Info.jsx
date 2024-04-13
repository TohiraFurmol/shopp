import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {

    const { id } = useParams()
    const [obj, setObj] = useState({})
    
    const getById = async (id) => {
        try {
            const { data } = await axios.get(`https://66178d6eed6b8fa43482fc43.mockapi.io/products/${id}`)
            setObj(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getById(id)
    },[id])

  return (
      <div className='flex px-[30px] m-auto pb-[145px]'>
          <div className='mt-[150px]'>
              <img src={obj.avatar} alt="" />
          </div>
          <div className='text-[#000] w-[50%] ml-[20px] p-[20px] dark:text-[#fff] mt-[200px] px-[50px]'>
              <h1 className='mt-[5px]'>{obj.title}</h1>
              <h1 className='mt-[5px] flex justify-between border-b-[2px] w-[290px]'><span className='text-gray-600'>price :</span>{obj.price}</h1>
              <h1 className='mt-[5px] flex justify-between border-b-[2px] w-[290px]'><span className='text-gray-600'>Brand :</span> {obj.brand} </h1>
              <p className='text-[gray] mt-[50px] dark:text-[#d2d2d2]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem excepturi ratione nihil esse ab illo aspernatur rem consequuntur corporis architecto corrupti veritatis tempora id et illum enim. Rerum, sapiente.
                  Animi illo natus eligendi, illum omnis similique molestiae maxime optio, aut commodi saepe, nisi molestias excepturi blanditiis dignissimos! Facilis impedit velit voluptatibus doloribus cupiditate blanditiis? Est minima provident aliquam accusantium.
                  Nostrum quo reprehenderit voluptatibus quis ratione explicabo magnam, ullam non ut ipsum vitae id praesentium natus suscipit tempora animi totam dolores eos. Fugiat quis illum consequatur molestiae sapiente tempore qui.</p>
          </div>
      </div>
  )
}

export default Info