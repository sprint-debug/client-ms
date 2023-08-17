import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./FireBaseConfig"; // firebaseConfig를 여기서 가져옵니다.

const firebaseApp = initializeApp(firebaseConfig); // 이미 가져온 config를 사용

const auth = getAuth(firebaseApp);

export { auth };
