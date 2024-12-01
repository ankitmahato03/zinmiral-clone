import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handelForm = (e) => {
    e.preventDefault();
    toast({
      title: "submitted Successfully We get back to you Sortly",
      duration: 2500,
      variant: "destructive",
    });
  };

  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center h-[calc(100vh-20px)] mt-12 lg:pb-0 space-y-6 lg:space-y-0"
    >
      <h1 className="text-black text-center text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[62px] mb-12">
        Contact Us
      </h1>
      <form
        name="submit-to-google-sheet"
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-md shadow-md"
        onSubmit={handelForm}
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <textarea
          name="Message"
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
