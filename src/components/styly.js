export const Container = styled.div`

  padding: 6px;
  height: 450px;
  display: flex;

  
 
  
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 darkgrey;
 
`;
export const ContainerRow = styled.div`
 width: 100vw;

display:flex;
justfy-content: space-around;
 background-color: red;
  
`;
export const HeaderRow = styled.div`
width: Auto;
height: Auto;
border-radius: 5px;
display: flex;
justify-content : space-between;
border-radius: 10px;
overflow: hidden;

`;
export const Content = styled.div`
  width: 1200px;
  height: Auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const InputContent = styled.div`
  background-color: #121214;
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #121214;
  padding: 0 5px;
  margin-bottom: 10px;

  svg {
    color: #353434;
    margin: 0 10px;

    width: 20px;
    height: 20px;
  }

  &:focus-within {
    border-color: #8257e5;

    svg {
      color: #8257e5;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: #121214;
  color: white;
  border: none;
  height: 50px;
  width: 100%;
  font-size: 18px;
`;

export const Span = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.9;
  align-self: flex-start;
  color: ${(props) => (props.color ? props.color : 'white')};

  &:hover {
    transition: opacity 0.2s ease 0s;
    opacity: 1;
  }
`;

export const ButtonLogin = styled.button`
  width: 80%;
  cursor: pointer;
  background: #121214;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  height: 50px;
  opacity: 0.9;
  margin: 20px 0;

  &:hover {
    ${(props) => (props.disabled === false
    ? 'transition: 0.2s ease; opacity: 1;'
    : 'cursor: not-allowed;')}
  }
`;

export const RegisterContent = styled.div``;
