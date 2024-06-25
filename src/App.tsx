import './App.css';
import mainImg from './styles/img/Rectangle1.png';

import styled from 'styled-components';
import { myTheme } from './styles/ThemeStyled';
import { css } from 'styled-components';

function App() {
   return (
      <div className='App'>
         <Title>
            Styled-components <span>.attrs</span> method
         </Title>

         <Form>
            <Field placeholder='Hello' />
            <Field placeholder='Privet' />
            <Field />
            <Checkbox />
         </Form>

         <CardComponent />
      </div>
   );
}

function CardComponent() {
   return (
      <Card>
         <Image
            src={mainImg}
            alt='mainImg'></Image>
         <CardContent>
            <CardTitle>Headline</CardTitle>
            <Text>
               Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
               molestie ornare in venen.
            </Text>
            <BtnField>
               <Button>See more</Button>
               <Button save>Save</Button>
            </BtnField>
         </CardContent>
      </Card>
   );
}

const Card = styled.div`
   width: 300px;
   height: 350px;
   background-color: ${myTheme.colors.bg};
   border-radius: 15px;
   box-shadow: 0px 4px 20px 5px #0000001a;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 20px;
   padding: 10px 10px 22px 10px;
`;

const Image = styled.img`
   width: 100%;
   border-radius: 15px;
   height: 170px;
`;

const CardContent = styled.div`
   padding: 0 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 20px;
`;

const CardTitle = styled.h1`
   font-weight: 700;
   color: ${myTheme.colors.headline};
   font-size: 16px;
`;

const Text = styled.div`
   color: ${myTheme.colors.primary};
   font-weight: 500;
   font-size: 12px;
`;

const BtnField = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 12px;
`;

type ButtonPropsType = {
   save?: boolean;
};

const Button = styled.button<ButtonPropsType>`
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 86px;
   height: 30px;
   padding: 5px 0px;
   border: 2px solid ${myTheme.colors.secondary};
   font-size: 10px;
   line-height: 20px;
   font-weight: 700;
   cursor: pointer;
   color: ${myTheme.colors.bg};
   background-color: ${myTheme.colors.secondary};
   transition: all 0.2 ease-in 0;

   &:hover {
      background-color: ${myTheme.colors.hover};
   }

   ${(props) =>
      props.save &&
      css<ButtonPropsType>`
         background-color: ${myTheme.colors.bg};
         color: ${myTheme.colors.secondary};

         &:hover {
            background-color: ${myTheme.colors.hover};
         }
      `}
`;

export default App;

const Checkbox = styled.input.attrs(() => ({
   type: 'checkbox',
}))``;

const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
   margin-bottom: 32px;
   span {
      color: #e91e63;
   }
`;

const Form = styled.form`
   width: 100%;
   max-width: 500px;
`;

const Field = styled.input.attrs(({ placeholder }) => ({
   type: 'password',
   placeholder: placeholder || 'Type smt else',
}))`
   padding: 5px 15px;
   margin: 10px 0;
   width: 100%;
   font-size: 1rem;
`;
