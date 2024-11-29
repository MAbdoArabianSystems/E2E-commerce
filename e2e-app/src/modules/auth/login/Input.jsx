const Input = ({
  inputType,
  labelTitle,
  placeHolder,
  required,
  register,
  name,
  errors,
}) => {

  const validationRules = {
    required: required && `${labelTitle} is required`,
    ...(inputType === "password" && {
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
      maxLength: {
        value: 20,
        message: "Password must be at most 20 characters long",
      },
    }),
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {labelTitle}
      </label>
      <input
        type={inputType}
        {...register(name, validationRules)}
        id={name}
        className={`bg-gray-50 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
        placeholder={placeHolder}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Input;
