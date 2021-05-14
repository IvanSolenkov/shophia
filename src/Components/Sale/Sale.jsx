const Sale = () => {
    return (
        <div className="sale">
            <div className="first-square">
                <div className="second-square">
                    <h3>Mid-Season</h3>
                    <h2>Sale</h2>
                    <h3>Up To</h3>
                    <span>50% Off</span>
                </div>
            </div>
            <button>Shop Now</button>
            <div className="squares">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
            </div>
        </div>
    );
}

export default Sale;