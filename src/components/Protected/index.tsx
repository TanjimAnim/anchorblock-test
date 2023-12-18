import { useAppSelector } from "../../redux/hooks";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector((state) => state.user);
  if (user.token) {
    window.location.href = "/";
  }
  return children;
}
