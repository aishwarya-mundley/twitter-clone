import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'858551177860055040'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='naval'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/dummy'}
          options={{ text: '#reactjs is awesome', via: 'dummy' }}
        />
      </div>
    </div>
  )
}

export default Widgets
