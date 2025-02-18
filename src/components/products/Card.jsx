export default function Card(props) {
    return (
        <>
            <div className="container">
                <ul>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                    <li><button className="btn btn-primary">{props.title}</button></li>
                </ul>
            </div>
            <div className="container">
                <div className="accordion">
                    <div className="accordion__title">
                        <h3>{props.titolo}</h3>
                        <p>{props.descrizione}</p>
                    </div>
                </div>
            </div>
        </>
    )
}