import {NextPage} from "next";
import Head from "next/head";
import {Index} from "../components/Battle";

const Start: NextPage = () => {
    return (
        <div className={'page'}>
            <Head>
                <title>Start of the game</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <Index/>
        </div>
    )
}

export default Start;