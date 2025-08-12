import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    //want to put these listeners on the browser only once
    window.addEventListener("offline", () => {
      //eventlisteners fro the event online/offline
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
}; //No, the "online" or "offline" event listeners do not trigger automatically on the first render.
// These are passive listeners — they wait for the event to occur. They do not fire immediately when you add them.
export default useOnlineStatus;

//to avoid memory leaks
//  return a function from useEffect:
//  return () => {
//       // Cleanup to avoid memory leaks
//       window.removeEventListener("offline", handleOffline);
//       window.removeEventListener("online", handleOnline);
//     };
