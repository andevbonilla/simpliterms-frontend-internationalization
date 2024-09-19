import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGavel, faMagnifyingGlass, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


export const Advantage = ({title, text, id}:any) => {
  return (
    <div className="border-2 border-gray-300 rounded p-10 md:p-12 relative overflow-hidden">
        <div className="flex items-center mb-4">
          {
            id === 1 && <FontAwesomeIcon icon={faClock} size="2x" className="text-[#5712DF]"/>
          }
          {
            id === 2 && <FontAwesomeIcon icon={faGavel} size="2x" className="text-[#5712DF]"/> 
          }
          {
            id === 3 && <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="text-[#5712DF]"/>
          }
          {
            id === 4 && <FontAwesomeIcon icon={faThumbsUp} size="2x" className="text-[#5712DF]"/>
          }
          <h4 className="text-[#5712DF] font-extrabold text-2xl ml-3">{title}</h4>
        </div>
        <p>{text}</p>
        <svg className="w-[12rem] rotate-6 opacity-10 right-[-3rem] bottom-[-3rem] absolute" viewBox="0 0 16 16" fill="#5712DF">
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
        </svg>
    </div>
  )
}
