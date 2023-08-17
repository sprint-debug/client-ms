### Client service web

**Overview**
firebase를 활용하여 client front service를 구현합니다.

**demo site**
https://sprint-debug.github.io/client-ms/

<hr>

**Components**

1. PageLogin

- 이메일 및 비밀번호 입력: 사용자는 이메일과 비밀번호를 입력할 수 있습니다.
- 로그인 시도: '로그인' 버튼을 클릭하면 입력된 이메일과 비밀번호로 로그인을 시도합니다.
- 로그인 상태 메시지: 로그인이 성공하면 "로그인 되었습니다."라는 메시지가 표시되며, 실패하면 "로그인이 되지 않았습니다."라는 메시지가 표시됩니다.

**_구현 세부 사항_**

useState를 사용하여 email, password, message 상태를 관리합니다.
signInWithEmailAndPassword 함수를 사용하여 Firebase 인증 서비스를 통한 이메일/비밀번호 로그인을 시도합니다.
로그인 시도 중 발생할 수 있는 오류는 try-catch를 사용하여 처리합니다.

2. Firebase설정
   Firebase와의 통신 및 인증을 위한 기본 설정입니다.

- FirebaseConfig: Firebase 프로젝트의 설정 정보를 담고 있습니다.
- firebaseApp 초기화: Firebase 앱을 초기화하며, 이를 통해 Firebase 서비스에 접근할 수 있습니다.
- 인증 서비스 초기화: Firebase 인증 서비스를 초기화하며, 이를 통해 이메일/비밀번호 인증, 소셜 로그인 등의 인증 방법을 사용할 수 있습니다.

**_구현 세부 사항_**

firebaseConfig: Firebase 프로젝트 설정을 담은 객체입니다. 이 정보는 Firebase 콘솔에서 가져올 수 있습니다.
initializeApp: Firebase 앱을 초기화하는 함수입니다. firebaseConfig를 인수로 전달합니다.
getAuth: Firebase 인증 서비스 객체를 반환하는 함수입니다.

<hr>

위의 README 내용은 PageLogin 컴포넌트와 Firebase 설정 파일의 주요 기능과 구현 세부 사항을 간략하게 요약하여 작성하였습니다.
필요에 따라 추가적인 정보나 세부 사항을 더 추가할 수 있습니다.
