import "./PageNotFound.scss";



const PageNotFound = () => {

  return (
    <div className="page-not-found-wrapper">
      <h1>404</h1>
      <h3>Page not found!</h3>
      <p>
        You tried to access a page that does not exist or you may have mistyped the address
      </p>
    </div>
  );
};

export default PageNotFound;
