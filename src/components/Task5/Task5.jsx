import ContactForm from "./ContactForm";

const task5GithubLink = import.meta.env.VITE_TASK5_GITHUB_LINK;

const Task5 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl text-yellow-600">Task: 5</h2>
      <div>
        <h3 className="font-bold pb-2 px-6">
          Create a Contact form using React Hook Form. Apply validation rules to
          ensure the name field is required, the email field contains a valid
          email address, and the message field is at least 50 characters long.
          Display appropriate error messages for each validation rule.
        </h3>
      </div>
      <p className="pb-2">
        Source code
        <a
          className="inline-block px-1 cursor-pointer underline text-blue-400"
          href={task5GithubLink}
          target="blank"
        >
          Github.com
        </a>
      </p>
      <ContactForm />
    </div>
  );
};

export default Task5;
