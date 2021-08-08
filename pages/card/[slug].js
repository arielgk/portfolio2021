import {useRouter} from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import Layout from "../../components/Layout";
import "plyr-react/dist/plyr.css";
import Plyr from "plyr-react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Card() {
    const {query} = useRouter()
    const {data, error} = useSWR(
        () => query.slug && `/api/items/${query.slug}`,
        fetcher
    )
    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout>
            <div className={'single'}>

                <div className={'inframe'}>
                    <div className="card-single">
                        <div>
                            <div className={'close-section'}>

                                <Link href={"/"}>
                                    <FontAwesomeIcon icon={faTimesCircle}/>
                                </Link>

                            </div>

                            <div className="card-single-header">
                                <h1>{data.name}</h1>
                            </div>
                            <div className={'card-single-content'}>

                                <p className="description">
                                    {data.longDesc}
                                </p>
                            </div>
                            <div className={'card-video'}>
                                <Plyr source={{
                                    type: "video",
                                    sources: [
                                        {
                                            src: data.video,
                                            provider: "youtube"
                                        }
                                    ]
                                }}/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
