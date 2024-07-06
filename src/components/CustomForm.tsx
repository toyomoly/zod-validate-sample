// src/components/CustomForm.tsx

import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormInputValidateSchema, InvitationUserFormInput } from '../types/validationSchemas';

const CustomForm: React.FC = () => {
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
  const { handleSubmit, register, formState: { errors } } = formMethods;

  const { fields } = useFieldArray({
    control: formMethods.control,
    name: "users",
  });

  const onSubmit = (data: any) => {
    console.log(data); // フォームのデータを処理するロジックを記述
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <input type="text" {...register(`users.${index}.name`)} />
          <input type="text" {...register(`users.${index}.email`)} />
          {errors.users?.[index]?.name && (
            <span style={{ color: 'red' }}>{errors.users[index].name.message}</span>
          )}
          {errors.users?.[index]?.email && (
            <span style={{ color: 'red' }}>{errors.users[index].email.message}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
