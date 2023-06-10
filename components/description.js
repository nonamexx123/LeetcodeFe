import { Lorem_Question, Lorem_Test_Cases, Lorem_Output } from "../Contsnats";
import ScrollableText from "./scrollableText";

export default function Description({style}) {
    return (
         <div style={{...style}}>
            <h1>Kadanes Algorithm</h1>
            <ScrollableText data={Lorem_Question} heading="Question"/>
            <ScrollableText data={Lorem_Test_Cases} heading="Test Cases"/>
            <ScrollableText data={Lorem_Output} heading ="Out for Test Cases"/>
         </div>
    );
}