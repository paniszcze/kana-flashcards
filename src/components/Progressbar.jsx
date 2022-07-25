import '../styles/Progressbar.css';

export default function Progressbar({ item }) {
    let style = {
        width: `${item.percentage}%`,
        backgroundColor: `${item.count !== 0 ? item.color : 'transparent'}`,
    };

    return (
        <div className="result-track">
            <div className="result-bar" style={style}>
                {item.count}
            </div>
        </div>
    );
}
