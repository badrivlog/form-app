import BasicForm from "./BasicForm";

const task1GithubLink = import.meta.env.VITE_TASK1_GITHUB_LINK;

const Task1 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl text-yellow-600">Task: 1</h2>
      <div>
        <h3 className="font-bold">
          Your task is to create a basic contact form using React that includes
          -
        </h3>
        <ul className="list-disc pb-5">
          <li>Three input fields (name, email, and message).</li>
          <li>Ensure the input fields are properly labeled and</li>
          <li>A submit button</li>
        </ul>
      </div>
      <p className="pb-2">
        For the practical code see on the
        <a
          className="inline-block px-1 cursor-pointer underline text-blue-400"
          href={task1GithubLink}
          target="blank"
        >
          Github link
        </a>
      </p>
      <BasicForm />
    </div>
  );
};

export default Task1;
