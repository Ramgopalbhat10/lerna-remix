import { Container } from "@mantine/core";
import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/server-runtime";
import { DefaultErrorBoundary } from "~/containers";
import { Header } from "~/layouts/Header";
import postStyles from "~/styles/routes/posts.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: postStyles }];
};

export default function PostsRoute() {
  return (
    <>
      <Header title="MRGB" />
      <main>
        <Container size="sm">
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <DefaultErrorBoundary error={error} />;
}
