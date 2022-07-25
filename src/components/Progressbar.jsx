export default function Progressbar({ item, index }) {
    let style = {
        width: `${item.percentage}%`,
        backgroundColor: `${item.count !== 0 ? item.color : 'transparent'}`,
    };

    return (
        <div className="result-track" key={index}>
            <div className="result-bar" style={style}>
                {item.count}
            </div>
        </div>
    );
}
