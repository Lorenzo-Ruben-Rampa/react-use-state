import Button from "./AccordionList";
import Card from "./Accordion";

export default function Main() {
    return (
        <main>
            <div className="container">
                <ul>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                </ul>
            </div>
            <div className="container">
                <Accordion />
            </div>
        </main >
    );
}