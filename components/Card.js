import Link from 'next/link'

const Card = ({item}) => {

    return (
        <Link  href="/card/[slug]" as={`/card/${item.slug}`}>

            <article className="card">
                <aside>
                    <figure>
                        <img src={item.img.small} alt=""/>
                    </figure>
                </aside>
                <main>

                    <div className="card-header">
                        {item.name}
                    </div>
                    <div className="card-techs">
                        {item.techs.map((tech, index) => {
                            return <div key={index}>{
                                tech
                            }

                            </div>
                        })}
                    </div>

                </main>
            </article>
        </Link>
    )
}
export default Card
