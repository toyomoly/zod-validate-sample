// src/components/CustomForm.tsx

import React from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { InvitationUserFormInput } from '../types/validationSchemas';

type Props = {
    formMethods: UseFormReturn<{ users: InvitationUserFormInput[] }>;
}

const CustomForm = ({formMethods}: Props): React.JSX.Element => {
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
  // console.log("delete");
};

export default CustomForm;
