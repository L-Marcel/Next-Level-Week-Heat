import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../contexts/auth";

export function useUser() {
  const user = useContextSelector(AuthContext, (context) => context.user);
  return user;
};

export function useSignInUrl() {
  const signInUrl = useContextSelector(AuthContext, (context) => context.signInUrl);
  return signInUrl;
};

export function useSignOut() {
  const signOut = useContextSelector(AuthContext, (context) => context.signOut);
  return signOut;
};