import React from 'react'
import frontend from '../Assets/frontend.png'
const Story = () => {
  return (
    <>

    <div className='mx-4'>
    <h1 className='text-4xl'>RECENT STORY I DIDIT</h1>
        <div className="">
            <img src={frontend} alt="" />
        </div>
        <div className="flex flex-col">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col space-y-2'>
                    <h1>Didit</h1>
                    <p>Code With Harry (Youtube)</p>
                    <p>Code Alpha (LinkedIn)</p>
                </div>
                <div className="">
                    <h1>500+</h1>
                    <p>Raised in</p>
                    <p>Growth like Tree</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story
