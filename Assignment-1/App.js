// const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nesting => we will try to implement this
// <div>
//     <h1>Neetu Rani</h1>
//     <div>
//         <h2>Software Engineer</h2>
//         <div>
//             <img src="" alt="">
//             <p></p>
//         </div>
//     </div>
// </div>
const name = React.createElement("h1", {id: "name"}, "Neetu Rani");
const designation = React.createElement("h2", {id: "profession"}, "Software Engineer");
const profilePic = React.createElement("img", {src: "https://media.licdn.com/dms/image/C5603AQH1RkR2ZBB8Xw/profile-displayphoto-shrink_800_800/0/1658754770861?e=2147483647&v=beta&t=zJK8RKLAOzXtj9VEQr5lDr0hM0MPUaaNrKTNH152o54"}, null);
const work = React.createElement("p", {id: "work"}, "Namaste React");
const about = React.createElement("div", {id: "about"}, [profilePic, work]);
const info = React.createElement("div", {id: "info"}, [designation, about]);
const container = React.createElement("div", {id: "container"}, [name, info]);
root.render(container);
