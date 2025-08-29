const MyButtonGroup = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/nicolas-andres-cano-leal/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/NicolasAndresCL"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        GitHub
      </a>
      <a
        href="https://dev.to/nicolasandrescl"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        Dev.to
      </a>
    </div>
  );
};

export default MyButtonGroup;
