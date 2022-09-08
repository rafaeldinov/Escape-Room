import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return(
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Back to main page</Link>
    </section>
  );
}

export default PageNotFound;
