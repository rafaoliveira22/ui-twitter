import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from 'phosphor-react'
import { NavLink, Link } from 'react-router-dom'

import twitterLogo from '../assets/logo-twitter.svg';
import './cssComponents/Sidebar.css'

export function Sidebar(){
    return(
        <aside className="sidebar">
            <img className='logo' src={twitterLogo} alt="Logotipo twitter" />

            <nav className='main-navegation'>
                <NavLink to='/'> 
                    <House weight='fill'/>
                    <span>Home</span>
                </NavLink>

                <Link to='#'> 
                    <Hash />
                    <span>Explore</span>
                </Link>

                <Link to='#'> 
                    <Bell />
                    <span>Notifications</span>
                </Link>

                <Link to='#'> 
                    <Envelope />
                    <span>Messages</span>
                </Link>

                <Link to='#'> 
                    <BookmarkSimple />
                    <span>Bookmarks</span>
                </Link>

                <Link to='#'> 
                    <FileText />
                    <span>Lists</span>
                </Link>

                <Link to='#'> 
                    <User />
                    <span>Profile</span>
                </Link>

                <Link to='#'> 
                    <DotsThreeCircle />
                    <span>More</span>
                </Link>
            </nav>
        <button className='btn-new-tweet' type='button'>
            <Pencil />
            <span>Tweet</span>
        </button>
      </aside>
    )
}