import styled from 'styled-components';

const PhonebookBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  text-align: center;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 20px;
  width: 510px;

  background-color: #fefefe;
  border-radius: 15px;

  text-align: center;
`;

export { PhonebookBox, ContactBox };
