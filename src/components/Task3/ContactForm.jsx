import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    alert(JSON.stringify(formState));
  };

  const handleChangeNameInput = (event) => {
    setFormState({ ...formState, name: event.target.value });
  };

  const handleChangeEmailInput = (event) => {
    setFormState({ ...formState, email: event.target.value });
  };

  const handleChangeMessage = (event) => {
    setFormState({ ...formState, message: event.target.value });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className=" border rounded-md p-5 flex flex-col gap-2"
    >
      <div>
        <label className="block" htmlFor="task3-name">
          Name
        </label>
        <input
          onChange={handleChangeNameInput}
          type="text"
          id="task3-name"
          name="task3-name"
          placeholder="John Doe"
          value={formState.name}
        />
      </div>
      <div>
        <label className="block" htmlFor="task3-email">
          Email
        </label>
        <input
          onChange={handleChangeEmailInput}
          type="email"
          id="task3-email"
          name="task3-email"
          placeholder="example@gmail.com"
          value={formState.email}
        />
      </div>
      <div>
        <label className="block" htmlFor="task3-message">
          Message
        </label>
        <textarea
          onChange={handleChangeMessage}
          id="task3-message"
          name="task3-message"
          rows="5"
          cols="40"
          value={formState.message}
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white rounded-md py-1" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
