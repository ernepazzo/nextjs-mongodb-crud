import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container, Button } from "semantic-ui-react";

export const Navbar = () => {
  const router = useRouter();

  return (
    <Menu inverted borderless attached>
      <Container>
        <Menu.Item>
          <Link href="/">
            <img src="/favicon.ico" alt="" />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              primary
              size="mini"
              onClick={() => router.push("/tasks/new")}
            >
              New Task
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
