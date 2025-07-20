import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import { useState } from "react";
export default function Examples(){

     const [item,setItem]=useState("");
      // now we need to know which button was selected and then display dynamic content according to it 
    const handleSelect = (selectedButton)=>{
        setItem(selectedButton)
        console.log("Selected");
    }
    return (
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
    )
}