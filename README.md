# 트레이너스 밀

## 프로젝트 개요

트레이너스 밀은 사용자가 맞춤형 식사 옵션을 선택하고 결제하는 과정을 간편하게 처리할 수 있도록 설계된 웹 애플리케이션입니다. React와 TypeScript로 개발되었으며, 사용자(트레이너)가 주차별 식단을 관리하고, 옵션을 변경하거나 결제 방법을 선택할 수 있는 기능을 제공합니다. 이 프로젝트는 다양한 UI 컴포넌트와 비즈니스 로직을 포함하며, 사용자는 손쉽게 식사 정보를 수정하거나 결제를 완료할 수 있습니다.

---

## 프론트엔드

### 기술 스택

- **React**
- **TypeScript**
- **Styled-Components**
- **React-Router**
- **Vite**
- **Yarn**

---

### 프로젝트 설정 및 실행 방법

1. **프로젝트 클론**
    
    ```bash
    git clone <repository-url>
    cd <project-directory>
    cd frontend
    ```
    
2. **의존성 설치**
    
    ```bash
    yarn install
    ```
    
3. **환경 변수 설정**`.env` 파일을 생성하고 다음과 같은 형식으로 필요한 변수를 설정하세요.
    
    ```bash
    REACT_APP_API_URL=https:/xxxxxxxx.com
    ```
    
4. **개발 서버 실행**
    
    ```bash
    yarn run dev
    ```

---

### 폴더 구조

```bash
src/
│
├── components/
│   ├── auth/                  # 사용자 인증 관련 컴포넌트
│   │   ├── AuthForm.tsx
│   │   └── UserCard.tsx
│   ├── member/                # 회원 정보 관련 컴포넌트
│   │   ├── AddressDeliveryInfo.tsx
│   │   ├── GoalActivityInfo.tsx
│   │   ├── PersonalInfo.tsx
│   │   └── PhysicalInfo.tsx
│   ├── menu/                  # 식사 선택 및 옵션 관련 컴포넌트
│   │   ├── AddBlockInfo.tsx
│   │   ├── BlockInfo.tsx
│   │   └── Nutrients.tsx
│   └── ui/                    # 공통 UI 컴포넌트
│       ├── Button.tsx
│       ├── InfoGroup.tsx
│       ├── InputComponent.tsx
│       └── Modal.tsx
│
├── constants/                 # 상수값 정의
│   └── index.tsx
│
├── layout/                    # 레이아웃 관련 컴포넌트
│   └── header/
│       └── index.tsx
│
├── pages/                     # 주요 페이지 컴포넌트
│   ├── Add.tsx
│   ├── Bia.tsx
│   ├── Confirmation.tsx
│   ├── DeliveryDate.tsx
│   ├── DeliveryPickup.tsx
│   ├── Diet.tsx
│   ├── EditMember.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Meal.tsx
│   ├── Member.tsx
│   ├── NormalPayment.tsx
│   ├── NormalPaymentFail.tsx
│   ├── NormalPaymentSuccess.tsx
│   ├── Option.tsx
│   ├── Payment.tsx
│   └── Register.tsx
│
├── store/                     # 상태 관리 관련 파일 (Redux 사용 시)
│   └── index.tsx
│
├── styles/                    # 전역 스타일링 및 컬러 정의
│   ├── color.ts
│   └── GlobalStyle.ts
│
├── types/                     # 타입 정의 파일
│   ├── App.tsx
│   ├── index.ts
│   └── main.tsx
│
├── .env                       # 환경 변수 파일
├── .eslintrc.cjs              # ESLint 설정 파일
├── Dockerfile                 # Docker 설정 파일
├── tsconfig.json              # TypeScript 설정 파일
└── README.md                  # 프로젝트 설명 파일

```

---

### 주요 기능 설명

### 1. **식사 옵션 선택 및 수정**

`Diet.tsx` 페이지에서는 사용자가 주차별로 식사 옵션을 선택하고, 각 식사의 블록 옵션 및 추가 블록을 선택할 수 있습니다. 사용자는 옵션을 수정할 수 있으며, 각 탭은 주별 식사 정보를 표시합니다. **`BlockInfo`**, **`AddBlockInfo`**, **`Nutrients`** 등의 컴포넌트가 UI를 구성하며, 각 컴포넌트는 해당 식사의 영양 정보를 포함합니다.

- **기능 요소**: 주차별 탭 전환, 옵션 수정, 금액 합산
- **관련 파일**: `src/pages/Diet.tsx`, `src/components/menu/BlockInfo.tsx`, `src/components/menu/AddBlockInfo.tsx`, `src/components/menu/Nutrients.tsx`

### 2. **옵션 페이지**

`Option.tsx`는 특정 식사의 옵션을 상세히 수정할 수 있는 페이지입니다. 사용자는 기본 블록(base), 단백질(protein), 채소(veg), 소스(flavor) 등을 변경할 수 있으며, 추가로 단백질 및 채소를 더 선택할 수 있습니다. 모든 옵션 선택에 따른 가격 변동이 실시간으로 반영됩니다.

- **기능 요소**: 실시간 가격 변동, 블록 추가 및 제거
- **관련 파일**: `src/pages/Option.tsx`

### 3. **배송/픽업 날짜 선택**

`DeliveryDate.tsx`에서는 배송 또는 픽업 날짜를 월요일 기준으로 선택할 수 있습니다. 목요일 00시 이후부터는 다다음 주 월요일만 선택할 수 있도록 제한이 적용됩니다.

- **기능 요소**: 월요일만 선택 가능, 목요일 이후의 선택 제한
- **관련 파일**: `src/pages/DeliveryDate.tsx`

### 4. **결제 페이지**

`Payment.tsx`는 사용자가 선택한 식사 옵션에 대한 결제를 처리하는 페이지입니다. 사용자에게 결제 금액을 확인시키고, 결제를 진행합니다. 기존에는 여러 결제 방법(일반 결제, 정기 결제, 현장 결제 등)을 선택할 수 있었으나, 현재는 모든 결제 방식이 하나로 통합되어있는 상태입니다.

- **기능 요소**: 결제 금액 확인, 결제 모달 표시, 결제 완료 후 이동
- **관련 파일**: `src/pages/Payment.tsx`

### 5. **결제 완료/실패 처리**

`NormalPaymentSuccess.tsx`와 `NormalPaymentFail.tsx`는 결제가 성공했을 때와 실패했을 때의 상태를 처리하는 페이지입니다. 성공 시 사용자에게 주문 확인 메시지를 보여주고, 실패 시 재결제 시도를 유도합니다.

- **기능 요소**: 결제 결과 처리
- **관련 파일**: `src/pages/NormalPaymentSuccess.tsx`, `src/pages/NormalPaymentFail.tsx`

### 6. **사용자 정보 관리**

사용자는 회원가입 후, **`PersonalInfo.tsx`** 및 **`PhysicalInfo.tsx`** 컴포넌트를 통해 자신의 신체 정보와 개인 목표를 설정할 수 있습니다. 이러한 정보는 나중에 결제 및 배송 설정에서 참고됩니다.

- **기능 요소**: 회원 정보 입력, 신체 정보 입력
- **관련 파일**: `src/components/member/`

### 7. **배송지 정보 입력**

사용자는 배송지 정보를 입력하고 이를 저장할 수 있습니다. 이는 결제 및 주문 과정에서 필수적인 정보로 사용되며, 사용자는 **`AddressDeliveryInfo.tsx`** 컴포넌트를 통해 쉽게 정보를 수정할 수 있습니다.

- **기능 요소**: 배송지 정보 입력 및 수정
- **관련 파일**: `src/components/member/AddressDeliveryInfo.tsx`

---

### 주의 사항

### 1. **월요일 제한 규칙**

- `DeliveryDate.tsx`에서는 배송 및 픽업일을 월요일로만 설정할 수 있습니다. 만약 목요일 00시가 지나면 다음 주 월요일은 비활성화되며, 다다음 주 월요일부터 선택할 수 있습니다. 이를 위해 `getNextMonday` 함수가 사용되며, 날짜 계산이 정확히 이루어지도록 로직이 설계되어 있습니다.

### 2. **옵션 선택 오류 처리**

- 사용자가 식사 옵션을 선택할 때, 비정상적인 값이 들어가거나 메뉴 정보가 누락된 경우 오류 메시지가 표시됩니다. 이를 해결하기 위해 옵션 선택 전 항상 메뉴의 유효성을 검사하고, 오류가 발생할 시 사용자에게 안내 메시지를 제공합니다.

### 3. **가격 계산 및 누적**

- `Diet.tsx` 및 `Option.tsx` 페이지에서는 사용자가 선택한 옵션에 따라 금액이 실시간으로 계산되며, `totalPrice` 상태가 관리됩니다. 금액이 누적되지 않거나 잘못 계산되는 오류를 방지하기 위해서는 모든 옵션이 정상적으로 반영되었는지 확인해야 합니다. 만약 금액 누적 문제가 발생한다면 서버에서 처리하는 것이 더 안정적일 수 있습니다.

### 4. **비정상적인 데이터 접근**

- `Payment.tsx` 및 `DeliveryDate.tsx` 등 주요 페이지에서는 상태가 제대로 전달되지 않았을 경우 비정상적인 접근을 방지하기 위해 `navigate` 함수를 사용하여 사용자에게 안내 메시지를 보여주고 이전 페이지로 돌려보내는 처리가 되어 있습니다. 이로 인해 잘못된 상태로 페이지에 진입하는 문제를 방지합니다.

---

### 추가 정보

- **API 호출**: `src/api/index.ts`에 정의된 `apiClient`를 사용하여 백엔드와의 통신이 이루어집니다. 필요한 요청은 해당 파일을 참고하여 작성할 수 있습니다.


<br/><br/><br/><br/>

## 백엔드
