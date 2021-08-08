import Link from 'next/link'
import Arrow from "./Icons/arrow";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhp, faReact, faApple, faWindows, faJava, faAndroid, faJs} from "@fortawesome/free-brands-svg-icons";

library.add(faPhp, faReact, faApple, faWindows, faJava, faAndroid, faJs);

const Card = ({item}) => {

    return (
        <Link href="/card/[slug]" as={`/card/${item.slug}`}>
            <article className="card">
                <div className="inner-card">
                    <aside>
                        <FontAwesomeIcon
                            icon={['fab', item.techs[0].toLowerCase().substring(2)]}/>
                    </aside>
                    <main>
                        <div className="card-header">
                            {item.name}
                        </div>
                        <div className={'card-desc'}>
                            {item.desc}
                        </div>
                    </main>
                    <div className="icon">
                        <Arrow/>
                    </div>
                </div>
            </article>
        </Link>
    )
}
export default Card
