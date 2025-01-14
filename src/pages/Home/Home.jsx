import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>
        <Categories></Categories>
        <Rooms></Rooms>
      </Container>
    </div>
  );
};

export default Home;
