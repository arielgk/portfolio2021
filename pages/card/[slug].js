import {useRouter} from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
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
        <div className="card-single">
            <Link href={"/"}>volver</Link>
            <figure>
                <img src={data.img.large} alt=""/>
            </figure>
            <div className="card-single-header">

                <h1>{data.name}</h1>
            </div>
        </div>

    )
}
