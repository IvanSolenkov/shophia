const Titles = (props) => {
    const titleName = props.titleName;

    return (
        <div className="titles">
            <div className="divider" />
            <span className="title-square" />
            <div className="text-title">{titleName}</div>
            <span className="title-square" />
            <div className="divider" />
        </div>
    );
}

export default Titles;