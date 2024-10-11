import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormInputValidateSchema, InvitationUserFormInput } from './types/validationSchemas';
import CustomForm from './components/CustomForm';

function App() {
  const initialValues: { users: InvitationUserFormInput[] } = {
    users: []
  };
  for (let i = 0; i < 200; i++) {
    initialValues.users.push({
      name: `user${i}`,
      email: `hoge${i}@example.com`,
    });
  }
  initialValues.users[2].name = "";
  initialValues.users[4].name = "";
  initialValues.users[6].name = "abc123456789012345678901234567890";
  
  initialValues.users[4].email = "";

  const formMethods = useForm({
    defaultValues: initialValues,
    mode: "onChange",
    resolver: zodResolver(userFormInputValidateSchema), // バリデーションスキーマの設定
  });

  const [isShow, setIsShow] = React.useState<boolean>(true);

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <button onClick={ () => setIsShow(true) }>show</button>
      <button onClick={ () => setIsShow(false) }>hide</button>
      {isShow ? (
        <div>
          <h1>is Valid = {"" + formMethods.formState.isValid}</h1>
          <CustomForm formMethods={formMethods} />
        </div>
      ) : (
        <div>Noting</div>
      )}
    </div>
  );
}

export default App;
