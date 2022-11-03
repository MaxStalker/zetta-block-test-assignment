# Overview
On the surface it sounds like very basic application, until we got to the point, where 
we need to manage multiple tables at once.
This prompts the idea of using shared application state instead of component state.

## Design
State will use endpoints as keys to allow multiple tables to be handles independently 
(even though we have single endpoint at the moment).

### Undo/Redo
Every

### Tabs and Pagination
Current selected tab and pagination will probably better handled via query params:
/tabKey=first&tabId=1&perPage=20&page=2