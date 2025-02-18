import Button from "./Button";
import Card from "./Card";

export default function Main() {
    return (
        <main>
            <div className="container">
                <ul>
                    <li><Button /></li>
                    <li><Button /></li>
                    <li><Button /></li>
                    <li><Button /></li>
                    <li><Button /></li>
                    <li><Button /></li>
                </ul>
            </div>
            <div className="container">
                <Card />
            </div>
        </main >
    );
}