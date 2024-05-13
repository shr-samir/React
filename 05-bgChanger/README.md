# Background Changer

## Learnings

### onClick 
- onClick react ma euta event handler function ho jasma click event hune bittikai tyo event trigger hunxa.
- onClick react ko one of the synthetic event ho.
- In this case:
 function handleColorChange(color) {    setBgColor(color); }
 <button onClick={handleColorChange('red')}> Click </button>
- onClick event in react ma direct function call garyo vane Error: "too many re-renders" aauxa kinaki tesle component render garda state lai immediately update garna kojxa. But, hamlai ta button click huda chahine ho.
- onClick lai chahiyaxa function not its return value
- yo problem chai callback pass garera solve hunxa


### working of props

- props chai hamro jahile parent to child component ma pass hunxa
- yo case ma mero Button.jsx chai child vayo ra App.jsx chai parent
- maile aba Button.jsx ma setBgColor call gare vane error aauxa kinaki Button.jsx ma ta setBgColor defined xaina.
- But child le props access garna paunu parene ho...  tesko lagi chai hamle setBgColor lai ni as a prop nai pass garxau


- In React, props are typically passed from a parent component to a child component.  Child components cannot directly modify the props passed to them. Instead, if a child component needs to update the data or trigger an action in the parent component, it can do so by invoking a callback function passed as a prop from the parent. React provides other mechanisms for managing and sharing state between components, such as using React's Context API or state management libraries like Redux. These approaches allow for more complex data flows and can enable communication between components tha t are not directly related in the parent-child hierarchy.


