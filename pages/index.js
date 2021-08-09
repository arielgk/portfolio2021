import Head from 'next/head'
import Layout from "../components/Layout";
import useSWR from "swr";
import Card from '../components/Card'
import Header from '../components/Header'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

    const {data, error} = useSWR('/api/items', fetcher)
    if (error) return <div className={'loading'}>Failed to load</div>
    if (!data) return <div className={'loading'}>Loading...</div>
    return (
        <Layout>

            <div className={'app-down'}>
                <div className={'inframe'}>


                    <div className="card-container">

                        {data.map((item, index) => {
                            return (
                                <Card key={item.id} item={item}/>

                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
