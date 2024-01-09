import { useRouteError } from "react-router-dom";

const Error = () => {
  const err= useRouteError()
  console.log(err)
  return (
    <div>
      <h1>Opps ! No such page Exist!</h1>
      <h1>{err.status + " "+ err.statusText}</h1>
    </div>
  );
};
export default Error;
