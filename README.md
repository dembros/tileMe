# tileMe

### experiments with plain old JS and HTML, to select diferent tiles.

# (Brainstorming)

## Requirements:
- needs to be stupid simple;
- needs to be fool-proof;
- needs to be reusable by fools.

## Idea:
I have a function that, given data, prints all my cards; first card is set to active;
When I detect event, I do the following checks:
- if key was horizontal, i pick element with same height in direction chosen
- if key was vertical, i pick element on top or underneath of current one

## questions:
- how do I know how many columns I have?
    - maybe I can group elements by the same horizontal height to know number of columns
- how do I know how many rows I have?
    - maybe I can group elements by the same vertical height to know number of rows
- how do I select a row? how do I select a column?
    - it's mapped
- do I put the elements in a map?
    - then I could give an x,y, and map returned me the element? so that I could do changes on that element
        - hover effect
        - bind enter key with "opening" action

## simple questions:
- how do i know width and height of element?
- how do i bind key event?
- should i setup a map and position coordinate or...
- or go through the list of elements everytime?
- how do i make this reusable - "given a list of elements, this library will do this..."
- is the use of libs like jquery avoidable for this library?

## Maybe:
- i don't need to map; I just need to know if, in the list of elements,
there is an element in same vertical/horizontal line
    if there is, depending on keyevent and distance between elements
    (positive or negative difference), I pick that element
