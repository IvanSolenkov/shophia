const Discount = (props) => {
    const discount = props.discount;

    return (
        <div className="discount">
            <p>{discount}<span>%</span></p>
        </div>
    );
}

export default Discount;