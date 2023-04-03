import courseService from "@/src/services/courseService";
import { Container } from "reactstrap";
import useSWR from "swr";
import SlideComponent from "../../commom/slideComponent";
import styles from "../../../../styles/slideSection.module.scss"

const FavoriteCategory = () => {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses);

    if (error) return error;
    if (!data) return <> <p>Loading ...</p> </>

    return (
        <>
        <Container className='d-flex flex-column align-items-center pt-5'>
            <p className={styles.titleCategory}>MINHA LISTA</p>
            {data.data.courses.lenght >= 1 ? (
                <SlideComponent course={data.data.courses}/>
            ) : (
                <p className='text-center pt-4 h4'> <strong> Você não tem nenhum curso na lista! </strong></p>
            )}  
        </Container>
        </>
    )
}

export default FavoriteCategory