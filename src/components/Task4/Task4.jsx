import LoginForm from "./LoginForm";

const task4GithubLink = import.meta.env.VITE_TASK4_GITHUB_LINK;

const Task4 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl text-yellow-600">Task: 4</h2>
      <div>
        <h3 className="font-bold">
          Create a new form with input fields for username and password.
          Implement the form as an uncontrolled component using ref to access
          the input field values upon form submission.
        </h3>
      </div>
      <p className="pb-2">
        For the practical code see on the
        <a
          className="inline-block px-1 cursor-pointer underline text-blue-400"
          href={task4GithubLink}
          target="blank"
        >
          Github link
        </a>
      </p>
      <LoginForm />
    </div>
  );
};

export default Task4;
