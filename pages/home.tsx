import Footer from "@/src/components/commom/footer"
import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory"
import FeaturedCategory from "@/src/components/homeAuth/featuredCategory"
import FeaturedSection from "@/src/components/homeAuth/featuredSection"
import ListCategories from "@/src/components/homeAuth/listCategories"
import NewestCategory from "@/src/components/homeAuth/newestCategory"
import Head from "next/head"

const HomeAuth = ( ) => {
    return (
        <>
        <Head>
            <title> DevFlix - Home </title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
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