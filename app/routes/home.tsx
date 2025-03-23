import type { Route } from "./+types/home";
import { Dashboard } from "~/pages/dashboard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "App - Dashboard", },
    { name: "description", content: "Welcome to Dashboard!" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
