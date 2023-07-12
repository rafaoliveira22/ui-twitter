import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import './cssComponents/Tweet.css'
interface TweetProps{
    content: string
}


export function Tweet(props: TweetProps){
    return(
        <Link className="tweet" to="/status">
            <img src="https://github.com/rafaoliveira22.png" alt="user profile image" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>User</strong>
                    <span>@user124</span>
                </div>

                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}