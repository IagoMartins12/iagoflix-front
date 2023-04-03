import courseService from "@/src/services/courseService";
import { Container } from "reactstrap";
import useSWR from "swr";
import styles from "../../../../styles/slideSection.module.scss"
import SlideComponent from "../../commom/slideComponent";

const FeaturedCategory = () => {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

    if (error) return error;
    if (!data) return <> <p>Loading ...</p> </>
    return (
        <>
        <Container className='d-flex flex-column align-items-center pt-5'>
            <p className={styles.titleCategory}>EM DESTAQUE </p>
            <SlideComponent course={data.data}/>
        </Container>
        </>
    )
}

export default FeaturedCategory