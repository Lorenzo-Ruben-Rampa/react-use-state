export default function Card({ title, onClick, isSelected }) {
    return (
        <ul>
            <li>
                <button className={`btn btn-primary ${isSelected ? 'selected' : ''}`} onClick={onClick}>
                    {title}
                </button>
            </li>
        </ul>
    );
}
