import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Aishwarya Mundley',
      username: 'mundley@aish',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://www.w3schools.com/w3images/avatar6.png',
    })
    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://www.w3schools.com/w3images/avatar6.png' />
          <input
            type='text'
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional : Enter image URL'
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
