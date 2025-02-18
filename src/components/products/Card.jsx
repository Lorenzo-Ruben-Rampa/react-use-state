export default function Card() {
    return (
        <>
            <div className="container">
                <ul>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                    <li><button className="btn btn-primary">{titolo}</button></li>
                </ul>
            </div>
            <div className="container">
                <div className="accordion">
                    <div className="accordion__title">
                        <h3>{titolo}</h3>
                        <p>{descrizione}</p>
                    </div>
                </div>
            </div>
        </>
    )
}