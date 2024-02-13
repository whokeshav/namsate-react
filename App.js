const children=React.createElement("h1",{},"hello world from react ")
const heading=React.createElement("div",{id:"hello-world"},React.createElement("h1",{},"hello world from react "))
const root=ReactDOM.createRoot(document.getElementById("root"))


//jsx is loading 
 
root.render(
    heading
)