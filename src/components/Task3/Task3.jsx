import ContactForm from "./ContactForm";

const task3GithubLink = import.meta.env.VITE_TASK3_GITHUB_LINK;

const Task3 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl text-yellow-600">Task: 3</h2>
      <div>
        <h3 className="font-bold pb-2 px-6">
          Implement form submission logic in the contact form created in Task 1.
          When the form is submitted, capture the form data and display it in an
          alert box or log it to the console.
        </h3>
      </div>
      <p className="pb-2">
        For the practical code see on the
        <a
          className="inline-block px-1 cursor-pointer underline text-blue-400"
          href={task3GithubLink}
          target="blank"
        >
          Github link
        </a>
      </p>
      <ContactForm />
    </div>
  );
};

export default Task3;
