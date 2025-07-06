const Button = ({ label, onClick, type = "button" }) => (
  <button
    onClick={onClick}
    type={type}
    className="w-full py-3 mt-4 bg-primary text-white rounded-lg hover:bg-indigo-600 transition duration-300"
  >
    {label}
  </button>
);

export default Button;
