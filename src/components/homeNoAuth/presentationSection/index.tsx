import styles from './styles.module.scss'
import { Container, Row, Col, Button } from 'reactstrap'
import Link from 'next/link'

const PresentationSection = () => {
    return (
        <>
            <Container className='py-4' style={{height: '58vh'}}>
                <Row>
                    <Col md className='d-flex flex-column justify-content-center align-items-start' >
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>

                        <p className={styles.title}>Tenha acesso aos melhores <br/> 
                            conteudos do mundo cinematográfico </p>

                        <p className={styles.description}>Assista de onde estiver, a qualquer momento.<br/> 
                            </p>
                            <Link href="/register" className={styles.hrefRegister}>
                                <Button outline className={styles.btnCta}>
                                    ACESSE AGORA <img src="/buttonPlay.svg" alt="buttonImg"  className={styles.btnImg}/>
                                </Button>
                            </Link>
                    </Col>
                    <Col md>

                    </Col>
                </Row>
                <Row>
                    <Col className={styles.arrowContainer}>
                        <img src="/homeNoAuth/iconArrowDown.svg" alt="arrowDown" className={styles.arrowDown}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PresentationSection