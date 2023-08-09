import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Items"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae
            iste sapiente incidunt recusandae. Laborum distinctio eveniet
            consectetur! Nostrum, eveniet. Repudiandae cumque modi odit ex,
            illum vel, enim voluptas est, natus deleniti error autem
            consequuntur! Cumque eum omnis delectus reiciendis a. Commodi nihil
            recusandae dicta iste vitae eaque, aut impedit.
          </p>
          <Link to="/order/salad">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
