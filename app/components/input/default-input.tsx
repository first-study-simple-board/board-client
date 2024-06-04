import { ChangeEvent, ReactElement } from "react";

interface InputProps {
  type: "text" | "number" | "password";
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  addClass?: string;
}

/**
 * 공용 재사용 인풋
 * @param param.type input type
 * @param param.name name
 * @param param.id id
 * @param param.label label text
 * @param param.placeholder input placeholder
 * @param param.onChange input value onChange handler
 * @param param.value input value
 */
export default function DefaultInput({
  type,
  name,
  id,
  label,
  placeholder,
  onChange,
  value,
  addClass,
}: InputProps): ReactElement {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClass}`}
      />
    </div>
  );
}
