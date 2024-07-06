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
        <CustomForm formMethods={formMethods} />
      ) : (
        <div>Noting</div>
      )}
    </div>
  );
}

export default App;
