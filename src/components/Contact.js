const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg text-center p-4 m-4">Contact Us Page</h1>

      <div className="flex justify-center items-center">
        <form>
          <div className="border flex flex-col justify-center  content-center p-3  w-80">
            <input
              type="text"
              className="border border-black p-2 m-2"
              placeholder="enter your name"
            />
            <input
              type="text"
              className="border border-black p-2 m-2"
              placeholder="enter your email"
            />
            <button className="border border-black p-2 m-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
