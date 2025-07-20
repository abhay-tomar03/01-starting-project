import { CORE_CONCEPTS } from "../data"
import ListItems from "./ListItems"
export default function CoreConcepts(){
    return(
        <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul>
        
                {/* dyanmically displaying the list */}
        
                {CORE_CONCEPTS.map((conceptItem,key)=><ListItems key={conceptItem.title} {...conceptItem} />   )}
        
                {/* This data is displayed not dynamically so in the data.js if any of the data is missing it will throw an error */}
                {/* <ListItems {...CORE_CONCEPTS[0]} />
                <ListItems {...CORE_CONCEPTS[1]} />
                <ListItems {...CORE_CONCEPTS[2]} />
                <ListItems {...CORE_CONCEPTS[3]} /> */}
        
                </ul>
        </section>
    )
}