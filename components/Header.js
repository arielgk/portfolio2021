import React from 'react';
import Link from 'next/link'


const Header = () => {


    return (
        <div className={'app-top'}>
            <div className={'inframe'}>
                <div className="header">
                    <Link href="/" as={'/'}>
                        <div className="logo">

                            ARIEL<span>KUHN</span>
                        </div>

                    </Link>
                    <p>Frontend and backend developer. I like to build interactive experiences.
                    </p>
                </div>

            </div>

        </div>
    )
}


export default Header;
