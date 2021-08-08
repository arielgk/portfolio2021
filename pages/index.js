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
            <div className={'app-top'}>
                <div className={'inframe'}>
                    <div className="header">
                        <div className="logo">ARIEL<span>KUHN</span></div>
                        <p>Frontend and backend developer. I like to build interactive experiences.
                        </p>
                    </div>
                    <div className={'hero'}>
                        slider
                    </div>
                </div>

            </div>

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
