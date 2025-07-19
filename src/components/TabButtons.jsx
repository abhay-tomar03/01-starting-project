export default function TabButtons({children,onSelect}){
    // const handleClick = ()=> console.log("Button Clicked!!!");
    return (
        <>
            <li><button onClick={onSelect}>{children}</button></li>
        </>
    )
}