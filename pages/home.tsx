import Footer from "@/src/components/commom/footer"
import HeaderGeneric from "@/src/components/commom/headerGeneric"
import PageSpinner from "@/src/components/commom/spinner"
import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory"
import FeaturedCategory from "@/src/components/homeAuth/featuredCategory"
import FeaturedSection from "@/src/components/homeAuth/featuredSection"
import ListCategories from "@/src/components/homeAuth/listCategories"
import NewestCategory from "@/src/components/homeAuth/newestCategory"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const HomeAuth = ( ) => {

    const router = useRouter()
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     if (!sessionStorage.getItem('devflix-token')){
    //         router.push("/login")
    //     } else {
    //         setLoading(false)
    //     }
    // }, [])

    // if (loading){
    //     return <PageSpinner/>
    // }
    
    return (
        <>
        <Head>
            <title> IagoFlix - Home </title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            <meta content="upgrade-insecure-requests" />
        </Head>
        <main>
            <FeaturedSection/>
            <NewestCategory/>
            <FavoriteCategory/>
            <FeaturedCategory/>
            <ListCategories/>
            <div style={{backgroundColor: "black"}}>
                <Footer/>
            </div>
        </main>
        </>
    )
}

export default HomeAuth