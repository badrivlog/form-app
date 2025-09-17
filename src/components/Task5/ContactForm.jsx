import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (userdata) => console.log(userdata);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border rounded-md p-5 flex flex-col gap-2"
    >
      <div>
        <label className="block" htmlFor="name5">
          Name
        </label>
        <input
          type="text"
          id="name5"
          name="name5"
          placeholder="John Doe"
          {...register("name5", { required: true })}
        />
        {errors.name5 && <p className="text-red-500">Name is required</p>}
      </div>
      <div>
        <label className="block" htmlFor="mail5">
          Email
        </label>
        <input
          type="email"
          id="mail5"
          name="mail5"
          placeholder="example@gmail.com"
          {...register("mail5", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.mail5?.message && (
          <p className="text-red-500">{errors.mail5?.message}</p>
        )}
      </div>
      <div>
        <label className="block" htmlFor="message1">
          Message
        </label>
        <textarea
          id="message1"
          name="message1"
          rows="5"
          cols="40"
          {...register("message1", {
            minLength: {
              value: 50,
              message: "Message should be 50 characters long",
            },
          })}
        ></textarea>
        {errors.message1?.message && (
          <p className="text-red-500">{errors.message1?.message}</p>
        )}
      </div>
      <button className="bg-blue-500 text-white rounded-md py-1" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
