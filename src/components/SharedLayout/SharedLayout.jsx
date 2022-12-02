import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styles';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          <span>GOIT</span> MOVIE DATABASE
        </Logo>
      </Header>
      <Outlet />
    </Container>
  );
}
