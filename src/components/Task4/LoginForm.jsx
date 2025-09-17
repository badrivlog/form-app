import { useRef } from "react";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log(usernameValue, passwordValue);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-80 border rounded-md p-5 flex flex-col gap-2"
    >
      <div>
        <label className="block" htmlFor="username">
          Username
        </label>
        <input
          ref={usernameRef}
          type="text"
          id="username"
          name="username"
          placeholder="John_Doe1"
        />
      </div>
      <div>
        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          placeholder="hIH23xh3#"
        />
      </div>
      <button className="bg-blue-500 text-white rounded-md py-1" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
