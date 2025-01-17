"use client"
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Question = ({ question, answer, last }: any) => {

  const [isOpened, setIsOpened] = useState(false);

  const changeOpened = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className={`${last ? 'border-y border-y-black py-5' : 'border-t border-t-black py-5'}`}>
      <div className="flex justify-between items-start pb-3 cursor-pointer" onClick={changeOpened}>
        <button className="text-xl font-bold text-start">{question}</button>
        {(!isOpened) ? <FontAwesomeIcon icon={faPlus} className="text-xl ml-2" /> : <FontAwesomeIcon icon={faMinus} className="text-xl ml-2" />}
      </div>
      {isOpened && <span>{answer}</span>}

    </div>
  )
}
