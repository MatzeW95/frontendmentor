import Img from "../img/illustration-multiple-platforms.webp";
import Img2 from "../img/illustration-audience-growth.webp";

const item3 = () => {

    return(
        <div className="GridItem" id="Grid3">
            <img src={Img} alt="Description of image" />
            <h3>Manage multiple accounts and platforms.</h3>
            <div>>56%</div>
            <p>faster audience growth</p>
            <img src={Img2} alt="Description of image" />
        </div>
    );
};

export default item3;