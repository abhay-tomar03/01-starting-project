import ListItems from "./ListItems";
import {CORE_CONCEPTS ,EXAMPLES} from '../data'
import TabButtons from "./TabButtons";
import { useState } from "react";
export default function Main() {
  const [item,setItem]=useState("components");
  // now we need to know which button was selected and then display dynamic content according to it 
  const handleSelect = (selectedButton)=>{
    setItem(selectedButton)
    console.log("Selected");
  }
  return (
    <>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <ListItems {...CORE_CONCEPTS[0]} />
            <ListItems {...CORE_CONCEPTS[1]} />
            <ListItems {...CORE_CONCEPTS[2]} />
            <ListItems {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButtons onSelect={()=>handleSelect('components')}>Components</TabButtons>
              <TabButtons onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
              <TabButtons onSelect={()=>handleSelect('props')}>Props</TabButtons>
              <TabButtons onSelect={()=>handleSelect('state')}>States</TabButtons>
            </menu>
            <div id="tab-contents">
              <h3>{EXAMPLES[item].title} </h3>
              <p>{EXAMPLES[item].description}</p>
              <pre>
                <code>
                    {EXAMPLES[item].code}
                </code>
              </pre>
            </div>
        </section>
      </main>
    </>
  );
}
