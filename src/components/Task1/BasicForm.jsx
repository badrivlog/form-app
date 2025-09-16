const BasicForm = () => {
  return (
    <form className=" border rounded-md p-5 flex flex-col gap-2">
      <div>
        <label className="block" htmlFor="name">
          Name
        </label>
        <input type="text" id="name" name="name" placeholder="John Doe" />
      </div>
      <div>
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div>
        <label className="block" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows="5" cols="40"></textarea>
      </div>
      <button className="bg-blue-500 text-white rounded-md py-1" type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
