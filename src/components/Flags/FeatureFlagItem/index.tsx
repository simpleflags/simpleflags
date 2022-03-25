import { Switch } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function FeatureFlagItem({ value }: any) {
  const navigate = useNavigate();
  return (
    <SwitchOff>
      <Switch /> {value}
    </SwitchOff>
  );
}
const SwitchOff = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 4px;
  box-shadow: 0 1px 5px -4px ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  padding: 25px;
  width: 90%;
  margin-left: 3.5%;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 8px -5px black;
    border: 1px solid ${(props) => props.theme.colors.lightBlue};
    background-color: #fcfeff;
  }
`;
export default FeatureFlagItem;
