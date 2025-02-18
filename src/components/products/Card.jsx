export default function Card({ title, onClick }) {
    return (
        <ul>
            <li>
                <button className="btn btn-primary" onClick={onClick}>
                    {title}
                </button>
            </li>
        </ul>
    );
}
