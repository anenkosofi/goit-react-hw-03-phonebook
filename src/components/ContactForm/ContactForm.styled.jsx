import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  width: 510px;

  background-color: #fefefe;

  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
`;
const Field = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  padding: 2px;

  font-size: 16px;

  color: rgb(200, 200, 200);

  pointer-events: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
    transform: translateY(-35px) scale(0.8);

    color: #010101;
    background-color: #fefefe;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;

  font-size: 16px;

  color: #010101;
  background-color: transparent;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:not(:placeholder-shown) {
    border-color: #010101;
  }
`;

const Button = styled.button`
  position: relative;
  margin: 0 auto;
  padding: 14px 26px;

  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;

  color: #010101;
  background-color: #ededed;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 50px;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 1;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1d976c;
    transform: scaleX(0);
    z-index: -1;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    color: #fefefe;
    border-color: #1d976c;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  &:hover:before,
  &:focus:before {
    transform: scaleX(1);
  }
`;

export { Form, Field, Label, Input, Button };
