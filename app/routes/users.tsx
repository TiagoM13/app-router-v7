import type { Route } from "./+types/users";
import { UserList } from "~/pages/users";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "App - Clientes", },
    { name: "description", content: "Listagem de usuários" },
  ];
}

export default function Home() {
  return <UserList />;
}
