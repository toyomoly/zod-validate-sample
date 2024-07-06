import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormInputValidateSchema, InvitationUserFormInput } from './types/validationSchemas';
import CustomForm from './components/CustomForm';

function App() {
  const initState: { users: InvitationUserFormInput[] } = {
    users: [
      {
        name: "",
        email: "",
      },
    ],
  };
  const formMethods = useForm({
    defaultValues: initState,
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
