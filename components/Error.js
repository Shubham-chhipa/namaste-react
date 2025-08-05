import { useRouteError } from "react-router-dom"; //A useful given us by react-router-dom

const Error = () => {
  const err = useRouteError(); //Gives us more detail information about the error, which we can use. returns an error object.
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
