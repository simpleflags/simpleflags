import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  -webkit-box-shadow: 0px 2px 15px 5px
    ${(props) => props.theme.colors.gainsBoro};
  box-shadow: 0px 2px 15px 5px ${(props) => props.theme.colors.gainsBoro};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
`;
export const Acc = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
`;
export const SignUpp = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  cursor: pointer;
`;

export const Email = styled.div`
  width: 45px;
  margin-bottom: 12px;
`;
export const PassForg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Password = styled.div`
  color: ${(props) => props.theme.colors.black};
`;
export const Forget = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  margin-bottom: 12px;
`;
