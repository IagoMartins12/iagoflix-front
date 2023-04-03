import categoriesService, { CategoryTipe } from "@/src/services/categoriesService";
import { Container } from "reactstrap";
import useSWR from "swr";
import ListCategoriesSlide from "../listCategoriesSlide";

const ListCategories = ( ) => {
    const { data, error } = useSWR("/listCategories", categoriesService.getCategories);

    if (error) return error;
    if (!data) return <> <p>Loading ...</p> </>

    return (
        <>{data.data.categories?.map(( categorie: CategoryTipe ) => (
            <ListCategoriesSlide key={categorie.id} categoryId={categorie.id} categoryName={categorie.name}/>
        ))}
        </>
    )
}

export default ListCategories