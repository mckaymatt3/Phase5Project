import React from 'react'

function ChatMessages({message}) {
  return (
    <div className="each-message">
        {message}
    </div>
  )
}

export default ChatMessages