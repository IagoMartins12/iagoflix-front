import CardsSection from '@/src/components/homeNoAuth/cardsSection';
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '@/src/components/homeNoAuth/presentationSection';
import SlideSection from '@/src/components/homeNoAuth/slideSection';
import courseService, { CourseType } from '@/src/services/courseService';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { ReactNode } from 'react';
import styles from '../styles/HomeNoAuth.module.scss'

interface IndexPageProps {
  children?: ReactNode
  course: CourseType[]
}

const HomeNoAuth = ({course} : IndexPageProps ) => {
  return (
    <>
      <Head>
        <title> DevFlix </title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property='og:title' content='DevFlix' key="title"/>
        <meta name='description' 
        content='Tenha acesso aos melhores conteudos de programação de uma forma simples e fácil'/>
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth/>
          <PresentationSection/>
        </div>
        <CardsSection/>
        <SlideSection newestCourses={course}/>
      </main>
    </>
  );
}

//Capturando os cursos. Essa validação é feito uma vez por dia, ou seja, a cada 24 horas essa função irá rodar
export const getStaticProps: GetStaticProps =async () => {
  const res = await courseService.getNewestCourse()
  return {
    props: {
      course: res.data
    }, 
    revalidate: 3600 * 24 
  }
}

export default HomeNoAuth;