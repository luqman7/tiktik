import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md'
import  {BiCommentX} from 'react-icons/bi'

interface IProps {
    text: string
}

const NoResults = ({text}: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <p className='text-8xl'>
        {text === 'Be the first to comment!' 
          ? <BiCommentX />
          : <MdOutlineVideocamOff />
        }
      </p>

      <p className='text-2xl text-center'>{text}</p>
    </div>
  )
}

export default NoResults