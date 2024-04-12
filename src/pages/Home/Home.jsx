import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='dark:bg-neutral-900 dark:text-[#fff]'>

      <section>
        <div className='bg-[url("src/assets/images/img.png")] bg-cover h-[100vh] w-[100%]'>
          <h1 className='text-[#fff] ml-[50px] pt-[380px] text-[50px] font-serif'>Rest, Relax, Unwind</h1>
          <h1 className='text-[#fff] ml-[50px] mt-[20px] text-[23px] font-semibold'>Embrace your choices - we do</h1>
        </div>

        <div className='mt-[100px] text-center'>
          <h1 className='text-[30px] font-medium'><span className='text-[red] font-bold text-[30px]'>/</span> Featured</h1>
        </div>


      </section>

      <section>
        <div className='flex justify-around mt-[80px] mb-[100px] text-center'>
          <div>
            <img src="src/assets/images/one.png" alt="" />
            <h1 className='text-[gray] mt-[40px] font-medium'>High-Back Bench</h1>
            <p className='font-bold'>$9,99</p>
          </div>
          <div>
            <img src="src/assets/images/two.png" alt="" />
            <h1 className='text-[gray] mt-[40px] font-medium'>Utopia Sofa</h1>
            <p className='mt-[0px] font-bold'>$39,95</p>
          </div>
          <div>
            <img src="src/assets/images/three.png" alt="" />
            <h1 className='text-[gray] mt-[40px] font-medium'>Entertainment Center</h1>
            <p className='mt-[0px] font-bold'>$29,98</p>
          </div>
        </div>

        <div className='text-center'>
          <Link to={"Product"}>
          <Button
            sx={{ marginBottom: "50px"}}
            variant="outlined">All Product
            </Button>
          </Link>
        </div>

      </section>

    </div>
  )
}

export default Home