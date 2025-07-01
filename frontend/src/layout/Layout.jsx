
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import Routers from '../routes/Routers.jsx'

const Layout = () => {
    return <>
        <Header />
        <main>
            <Routers />
        </main>
        <Footer />
    </>
}

export default Layout