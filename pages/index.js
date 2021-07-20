import Head from 'next/head'
import Layout from "../components/Layout";
import useSWR from "swr";
import Card from '../components/Card'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

    const {data, error} = useSWR('/api/items', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <Layout>
            <div className="card-container">

            {data.map((item, index) => {
                return (
                    <Card key={item.id} item={item} />

                )
            })}
            </div>
        </Layout>
    )
}
