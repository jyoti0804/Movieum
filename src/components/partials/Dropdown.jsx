

const Dropdown = ({ title, options , func }) => {
  return (
    <div className="select px-3">
      <select onChange={func} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o} className='text-white'>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
