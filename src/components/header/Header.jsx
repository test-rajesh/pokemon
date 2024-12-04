import { Logo, Notification, Search, ThemeToggle, DropDown } from ".";
import Container from "../Container";

export default function Header() {
  return (
    <Container>
      <div className="navbar-start">
        <DropDown />
      </div>
      <div className="navbar-center">
        <Logo />
      </div>
      <div className="navbar-end">
        <Search />
        <Notification />
        <ThemeToggle />
      </div>
    </Container>
  );
}
