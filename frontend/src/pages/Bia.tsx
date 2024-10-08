import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { apiClient } from "../api";
import Input from "../components/ui/InputComponent";
import Button from "../components/ui/Button";

const Bia: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [muscleMass, setMuscleMass] = useState<string>("");
  const [bodyFatMass, setBodyFatMass] = useState<string>("");
  const [bodyFatPercentage, setBodyFatPercentage] = useState<string>("");
  const [biaData, setBiaData] = useState<any>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const clientId = useParams().id;

  // 기존 데이터를 불러오는 함수
  useEffect(() => {
    const fetchBodyCompositionData = async () => {
      try {
        const { data } = await apiClient.get(
          `/client/bia/?client_id=${clientId}`
        );
        setBiaData(JSON.parse(data));

        if (biaData) {
          setWeight(biaData.weight);
          setMuscleMass(biaData.muscleMass);
          setBodyFatMass(biaData.bodyFatMass);
          setBodyFatPercentage(biaData.bodyFatPercentage);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (clientId) {
      fetchBodyCompositionData();
    }
  }, [clientId]);

  useEffect(() => {
    if (weight && muscleMass && bodyFatMass && bodyFatPercentage) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [weight, muscleMass, bodyFatMass, bodyFatPercentage]);

  const handleNumberInput = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: (value: string) => void
  ) => {
    const value = e.target.value;
    const onlyNumbers = value.replace(/[^0-9.]/g, "");
    setValue(onlyNumbers);
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setWeight);
  };
  const handleMuscleMassChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setMuscleMass);
  };
  const handleBodyFatMassChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setBodyFatMass);
  };
  const handleBodyFatPercentageChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setBodyFatPercentage);
  };

  const handleSubmit = async () => {
    const updatedData = {
      clientId,
      weight,
      muscleMass,
      bodyFatMass,
      bodyFatPercentage,
    };

    try {
      await apiClient.post(`/client/bia/`, updatedData);
      navigate(`/meal/${clientId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>체성분 데이터를 입력하세요</h1>
      <div className="content">
        <div className="bia-data-section">
          <h2>기존 데이터</h2>
          {biaData ? (
            <>
              <p>
                <strong>체중</strong> {biaData.weight}kg
              </p>
              <p>
                <strong>골격근량</strong> {biaData.muscleMass}kg
              </p>
              <p>
                <strong>체지방량</strong> {biaData.bodyFatMass}kg
              </p>
              <p>
                <strong>체지방률</strong> {biaData.bodyFatPercentage}%
              </p>
            </>
          ) : (
            <p>없음</p>
          )}
        </div>
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="weight">체중</label>
            <Input
              type="text"
              id="weight"
              placeholder="체중을 입력하세요"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="muscleMass">골격근량</label>
            <Input
              type="text"
              id="muscleMass"
              placeholder="골격근량을 입력하세요"
              value={muscleMass}
              onChange={handleMuscleMassChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bodyFatMass">체지방량</label>
            <Input
              type="text"
              id="bodyFatMass"
              placeholder="체지방량을 입력하세요"
              value={bodyFatMass}
              onChange={handleBodyFatMassChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bodyFatPercentage">체지방률</label>
            <Input
              type="text"
              id="bodyFatPercentage"
              placeholder="체지방률을 입력하세요"
              value={bodyFatPercentage}
              onChange={handleBodyFatPercentageChange}
            />
          </div>
          <Button
            text="다음"
            onClick={handleSubmit}
            color="main"
            disabled={!isFormValid}
          />
        </div>
      </div>
    </Container>
  );
};

export default Bia;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }

  .bia-data-section {
    flex: 0.4;
    padding: 20px;
    border-radius: 8px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
      margin-bottom: 20px;
      font-size: 20px;
    }

    p {
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.4;
    }
  }

  .input-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;

    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
      }

      input {
        padding: 15px;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
    }

    button {
      align-self: end;
      padding: 15px 30px;
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;
