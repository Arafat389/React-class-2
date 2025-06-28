import "./App.css";

// // if else condition
// const role = "guest";

// let message;

// if (role == "admin") {
//   message = <h1>Welcome admin</h1>;
// } else if (role == "user") {
//   message = <h1>Welcome user</h1>;
// } else {
//   message = <h1>Welcome guest</h1>;
// }

// // switch case

// const role = "guest";
// let message;

// switch (role) {
//   case "admin":
//     message = <h1>Welcome admin</h1>;

//     break;

//   case "user":
//     message = <h1>Welcome user</h1>;

//     break;

//   default:
//     message = <h1>Welcome guest</h1>;
//     break;
// }

// // ternary operator

// const role = "admin";

// function App() {
//   return (
//     <>
//        {role === "admin" ? <h1>Welcome admin</h1> : <h1>Welcome user</h1>}
//     </>
//   );
// }

// export default App;

// const role = "admin";

// function App() {
//   return (
//     <>
//        {role === "admin" && <h1>Welcome admin</h1>}
//     </>
//   );
// }

//export default App;

// // Immediately Invoked function Expression (IIFE) ono gaigai call kora jai na (function name thake na)

// const role = "admin";
// function App() {
//   return (
//     <>
//       {(() => {
//         if (role === "admin") {
//           return <h1>Welcome admin</h1>;
//         } else if (role === "user") {
//           return <h1>Welcome user</h1>;
//         } else {
//           return <h1>Welcome guest</h1>;
//         }
//       })()}
//     </>
//   );
// }

// export default App;


// // props components

// import Greetings from "./components/Greetings";
// const obj = {
//   name: "Arafat",
//   age: "20",
//   city : "Dhaka",
//   country: "bangladesh"
// }

// function App() {
//   return (
//     <>

//       <Greetings object={obj} />

//       {/* <Greetings title="Hello World" arafat="Arafat" />
//       <Greetings title="Hello World" arafat="Rakib" />
//       <Greetings title="Hello World" arafat="Sakib" /> */}
//     </>
//   );
// }

// export default App;


// // Click event


// function App() {
//   function handleClick()
//   {
//     alert ("button clicked!")
//   }
//   return (
//     <>

//      <button onClick={handleClick}>Click Me</button>

//     </>
//   );
// }

// export default App;


// Click event


function App() {
  const handleSubmit = (event) => {
    event.preventDefault();  //browser reload na hoi
    alert("From submitted")
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <input className="inputField" type="text" placeholder="Enter Something"></input>
      <button type="submit">Save</button>
    </form>

    </>
  );
}

export default App;
