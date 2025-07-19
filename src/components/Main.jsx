import ListItems from "./ListItems";
import {CORE_CONCEPTS} from '../data'
import TabButtons from "./TabButtons";
export default function Main() {
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
              <TabButtons>Components</TabButtons>
              <TabButtons>JSX</TabButtons>
              <TabButtons>Props</TabButtons>
              <TabButtons>States</TabButtons>
            </menu>
        </section>
      </main>
    </>
  );
}
