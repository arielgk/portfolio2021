import React from 'react';
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faLinkedin, faGithub, faHeart, faTwitter);

const Header = () => {


    return (
        <div className={'app-top'}>
            <div className={'inframe'}>
                <div className="header">
                    <div className={'logo-container'}>

                        <Link href="/" as={'/'}>
                            <div className="logo">

                                ARIEL<span>KUHN</span>
                            </div>

                        </Link>
                        <a href="https://www.linkedin.com/in/arielkuhn/" target={'_blank'}><FontAwesomeIcon
                            icon={faLinkedin}/></a>
                        <a href="https://github.com/arielgk/arielgk" target={'_blank'}><FontAwesomeIcon
                            icon={faGithub}/></a>
                        <a href="https://twitter.com/arielgkuhn" target={'_blank'}><FontAwesomeIcon
                            icon={faTwitter}/></a>
                    </div>

                    <p>Frontend and backend developer. I <FontAwesomeIcon icon={faHeart}/> to build interactive
                        experiences.
                    </p>

                </div>

            </div>

        </div>
    )
}


export default Header;
