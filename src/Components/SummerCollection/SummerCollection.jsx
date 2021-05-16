import model1 from '../img/summer-collection/model-1.png';
import model2 from '../img/summer-collection/model-2.png';
import model3 from '../img/summer-collection/model-3.png';
import model4 from '../img/summer-collection/model-4.png';
import model5 from '../img/summer-collection/model-5.png';
import model6 from '../img/summer-collection/model-6.png';
import model7 from '../img/summer-collection/model-7.png';
import model8 from '../img/summer-collection/model-8.png';


const SummerCollection = () => {
    return (
        <div className="summer-collection">
            <div className="top-collection">
                <img src={model1} alt="model1" />
                <img src={model2} alt="model2" />
                <img src={model3} alt="model3" />
                <img src={model4} alt="model4" />
            </div>

            <div className="bottom-collection">
                <img src={model5} alt="model5" />
                <img src={model6} alt="model6" />
                <img src={model7} alt="model7" />
                <img src={model8} alt="model8" />
            </div>
        </div>
    );
}

export default SummerCollection;