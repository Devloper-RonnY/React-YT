import React from 'react'

const Card = ({ele ,idx}) => {
  return (
        <div key={idx}>
          <a href={ele.url}>
            <div className="h-40 w-44 overflow-hidden gap-2">
              <img
                className="h-full w-full object-cover rounded"
                src={ele.download_url}
                alt="donwload_img"
                srcSet=""
              />
            </div>
            <h2 className="font-bold text-center">{ele.author}</h2>
          </a>
        </div>
  )
}

export default Card