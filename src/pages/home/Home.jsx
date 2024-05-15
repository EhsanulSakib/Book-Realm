import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "../../components/banner/Banner";
import HomeBooks from "../../components/homeBooks/HomeBooks";
import FAQ from "../../components/faq/FAQ";
import Team from "../../components/team/Team";

const Home = () => {
    // const loadedSubCategories = useLoaderData()
    // const [subCategories, setSubCategories] = useState(loadedSubCategories)
    // const { crafts } = useContext(AuthContext)
    // let showCrafts = crafts
    // if (crafts.length >= 6) {
    //     showCrafts = crafts.slice(0, 6)
    // }


    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <HomeBooks></HomeBooks>
            <Team></Team>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;