import LoginBtn from "./components/loginbtn"
import ClickMe from "./components/clickMe"

function App() {

  return (
   <div>
    {/* the below login button is to authenticate the user where he/she will redirect to the icp page to login */}
    <LoginBtn/>
    {/* first part --- > if user did not login then they will be treated as "anonymous user (2vxsx-fae)" where they are to visit site  */}
    {/* second part ----> they will be able to see ------>>>>Hello, your principal is: [Principal ID]<<<<<-------- */}
    <ClickMe/>
   </div>
  )
}

export default App;
