const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 text-sm text-gray-700">
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

export default Checkbox;
