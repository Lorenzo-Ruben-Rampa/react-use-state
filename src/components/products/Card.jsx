export default function Card({ title, onClick }) {
    return (
        // <div className="accordion">
        //     <div className="accordion__title">
        //         <h3>{title}</h3>
        //         <p>{description}</p>
        //     </div>
        // </div>
        <button onClick={onClick}>
            {title}
        </button>
    );
}
