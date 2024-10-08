import Img from "../img/illustration-five-stars.webp";

const item1 = () => {

    return(
        <div className="GridItem" id="Grid1">
            <h1>Social Media 10x Faster with AI</h1>
            <img src={Img} alt="Description of image" />
            <p>Over 4,000 5-star reviews</p>
        </div>
    );
};

export default item1;