import categoriesService from "@/src/services/categoriesService";
import useSWR from "swr";
import SlideComponent from "../../commom/slideComponent";
import styles from "../../../../styles/slideSection.module.scss"
import { Container } from "reactstrap";
import PageSpinner from "../../commom/spinner";


interface props {
    categoryId: number
    categoryName: string
}

const ListCategoriesSlide = ({categoryId, categoryName} : props ) => {
    const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () => categoriesService.getCourses(categoryId));

    if (error) return error;
    if (!data) {
        return <PageSpinner/>
    }
    console.log(data)

    return (
        <>
        <Container className='d-flex flex-column align-items-center pt-5'>
            <p className={styles.titleCategory}>{categoryName}</p>
            {data.data.courses.length == 0 ? (
                <p className='text-center pt-5 h4 pb-5'> <strong> Não possuimos obras nesta categoria ainda :(  </strong></p>
            ) : <SlideComponent course={data.data.courses}/>}
        </Container>
        </>
    )
}

export default ListCategoriesSlide