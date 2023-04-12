import Link from 'next/link'
import { Button, Container } from 'reactstrap'
import styles from './styles.module.scss'

const HeaderNoAuth = () => {
    return (
        <>
        <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
                <p style={{textAlign: "center"}}> Se cadastre para ter acesso aos melhores conteudos do mundo cinematográfico</p>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
            </div>
            <Container className={styles.nav}>
                <img src="logos/logoSemBackground.png" alt="logoDevflix" className={styles.imgLogoNav} />
                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} outline> Entrar </Button>
                    </Link>
                    <Link href="/register"> 
                        <Button className={styles.navBtn} outline> Quero fazer parte </Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default HeaderNoAuth