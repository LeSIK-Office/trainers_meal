import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "../api";
import Input from "../components/ui/InputComponent";
import Button from "../components/ui/Button";
import styled from "styled-components";
import logo from "../assets/logo.png";
import naver from "../assets/auth/naver.png";
import { FcGoogle } from "react-icons/fc";
import { lineGray, main } from "../styles/color";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!id.length || !password.length) {
      alert("아이디 및 비밀번호를 입력해 주세요.");
      return;
    }

    try {
      const response = await apiClient.post("/login/", {
        username: id,
        password: password,
        autoLogin: autoLogin,
      });

      const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

      if (regx.test(response.data)) {
        alert(response.data);
        return;
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          gym_name: response.data.gym,
          trainer_id: response.data.user.trainer_id,
          username: response.data.user.username,
        })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleId = (e: ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleAutoLogin = (e: ChangeEvent<HTMLInputElement>) =>
    setAutoLogin(e.target.checked);

  return (
    <Container>
      <img src={logo} alt="logo" className="logo" />
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="ID를 입력하세요"
          className="text-input"
          value={id}
          onChange={handleId}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="text-input"
          value={password}
          onChange={handlePassword}
        />
        <div className="sub-func-wrapper">
          <div className="checkbox-wrapper">
            <Input
              type="checkbox"
              id="auto-login"
              className="checkbox"
              checked={autoLogin}
              onChange={handleAutoLogin}
            />
            <label htmlFor="auto-login">로그인 유지</label>
          </div>
          <Link to="/forgot-password">비밀번호 찾기</Link>
        </div>
        <Button text="로그인" className="login-button" color="main" />
        <div className="link-wrapper">
          <Link to="/register">회원가입</Link>
          <span className="separator">|</span>
          <Link to="/forgot-email">ID 찾기</Link>
        </div>
        <div className="social-login-wrapper">
          <div className="social-buttons">
            <img src={naver} alt="naver-logo" className="social-button" />
            <FcGoogle className="social-button google" />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .logo {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;

    .text-input {
      width: 250px;
      height: 40px;
      border-radius: 5px;
    }

    .sub-func-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .checkbox-wrapper {
        display: flex;
        align-items: center;

        .checkbox {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          appearance: none;
          border: 1px solid ${lineGray};
          outline: none;
          cursor: pointer;
        }

        .checkbox:checked {
          background-color: ${main};
          border: 1px solid ${main};
        }
      }

      a {
        padding: 0;
        text-align: center;
        font-size: 16px;
      }
    }

    .link-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      font-size: 14px;

      .separator {
        margin: 0 5px;
        color: ${lineGray};
      }
    }

    .social-login-wrapper {
      .social-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;

        .social-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        .google {
          padding: 5px;
        }
      }
    }
  }
`;
