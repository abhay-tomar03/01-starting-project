import ListItems from "./ListItems";
import {CORE_CONCEPTS ,EXAMPLES} from '../data'
import TabButtons from "./TabButtons";
import { useState } from "react";
export default function Main() {
  const [item,setItem]=useState("");
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

            {/* dyanmically displaying the list */}

            {CORE_CONCEPTS.map((conceptItem,key)=><ListItems key={conceptItem.title} {...conceptItem} />   )}

            {/* This data is displayed not dynamically so in the data.js if any of the data is missing it will throw an error */}
            {/* <ListItems {...CORE_CONCEPTS[0]} />
            <ListItems {...CORE_CONCEPTS[1]} />
            <ListItems {...CORE_CONCEPTS[2]} />
            <ListItems {...CORE_CONCEPTS[3]} /> */}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButtons isSelected={item==='components'} onSelect={()=>handleSelect('components')}>Components</TabButtons>
              <TabButtons isSelected={item==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
              <TabButtons isSelected={item==='props'} onSelect={()=>handleSelect('props')}>Props</TabButtons>
              <TabButtons isSelected={item==='state'} onSelect={()=>handleSelect('state')}>States</TabButtons>
            </menu>
              { item ? (
                <div id="tab-content">
                  <h3>{EXAMPLES[item].title} </h3>
                  <p>{EXAMPLES[item].description}</p>
                  <pre>
                    <code>
                        {EXAMPLES[item].code}
                    </code>
                  </pre>
                </div>
              ):(
                <p>Select a Button</p>
              ) }
        </section>
      </main>
    </>
  );
}
