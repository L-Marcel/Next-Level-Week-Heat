import styles from "./App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MassageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { useUser } from "./hook/hooks";

export function App() {
  const user = useUser();

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned:""}`}>
      <MessageList/>
      { !!user? <SendMessageForm/>:<LoginBox/> }
    </main>
  );
};
