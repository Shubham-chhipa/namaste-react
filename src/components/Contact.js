const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input type="text" placeholder="name" className="border-1 p-2 m-2" />
        <input type="text" placeholder="number" className="border-1 p-2 m-2" />
        <button className="border-1 p-2 m-2 rounded-xl bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
