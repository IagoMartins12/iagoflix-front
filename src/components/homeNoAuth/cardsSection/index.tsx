import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const CardsSection = function () {
    const router = useRouter()
  return <>
	<p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
	<Container className="d-flex flex-wrap justify-content-center gap-5 pb-5">
		<div className={styles.card1} onClick={() => router.push('/home')}>
			<p className={styles.cardTitle}>ANIMES</p>
			<p className={styles.cardDescription}>
            Mergulhe em um mundo de animação e fantasia com nossos animes incríveis. 
            Desde histórias emocionantes de amor e amizade até aventuras épicas de luta e magia, 
			</p>
		</div>
        <div className={styles.card2} onClick={() => router.push('/home')} >
            <p className={styles.cardTitle}>FILMES</p>
            <p className={styles.cardDescription}>
            Os melhores lançamentos e clássicos do cinema, disponíveis para você assistir a qualquer
            hora e em qualquer lugar. 
            De comédias românticas a filmes de ação e aventura.
            </p>
        </div>
        <div className={styles.card3} onClick={() => router.push('/home')}>
            <p className={styles.cardTitle}>SERIES</p>
            <p className={styles.cardDescription}>
            Fique por dentro das séries mais populares e emocionantes do momento.
            Desde dramas intensos até comédias divertidas.
            </p>
        </div>
        <div className={styles.card4} onClick={() => router.push('/home')}>
            <p className={styles.cardTitle}>DESENHOS</p>
            <p className={styles.cardDescription}>
            Para as crianças e também para os adultos que adoram desenhos animados, nossa categoria 
            de desenhos traz os personagens mais queridos e divertidos da televisão. 
            Acompanhe as aventuras de seus heróis e vilões favoritos!
            </p>
        </div>
        <div className={styles.card5} onClick={() => router.push('/home')}>
            <p className={styles.cardTitle}>DORAMAS</p>
            <p className={styles.cardDescription}>
            Explore o universo dos dramas coreanos e japoneses com nossos doramas emocionantes e 
            envolventes. Desde romances intensos até histórias de amizade e superação
            </p>
        </div>
        <div className={styles.card6} onClick={() => router.push('/home')}>
            <p className={styles.cardTitle}>DOCUMENTARIOS</p>
            <p className={styles.cardDescription}>
            Para quem gosta de aprender e se informar, nossa categoria de documentários traz histórias 
            reais e fascinantes sobre o mundo em que vivemos. 
            Conheça lugares, pessoas e culturas de uma forma envolvente e inspiradora.
            </p>
        </div>
	</Container>
</>
};

export default CardsSection;