import img1 from '../img/hand-collection/img.png';
import img2 from '../img/hand-collection/img-1.png';
import img3 from '../img/hand-collection/img-2.png';
import img4 from '../img/hand-collection/img-3.png';
import img5 from '../img/hand-collection/img-4.png';

const HandCollection = () => {
    return (
        <div className="hand-collection">
            <div className="collection-disc">
                <img src={img2} alt="img2" id="img2" />
                <button>Shop Now</button>
                <img src={img3} alt="img3" id="img3" />
            </div>

            <img src={img1} alt="img1" id="img1" />

            <div className="collection-off">
                <img src={img4} alt="img4" id="img4" />
                <img src={img5} alt="img5" id="img5" />
            </div>
        </div>
    );
}

export default HandCollection;