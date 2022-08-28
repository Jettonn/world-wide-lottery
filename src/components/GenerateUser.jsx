const CustomButton = ({ text, generateUser, disabled }) => {
    return (
      <button
        className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
        disabled={disabled}
        onClick={ generateUser }
      >
        <span className="pointer-events-none">{text}</span>
        {
          disabled && (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full text-gray-300 pt-1 ml-1" role="status">
            </div>
          )
        }
      </button>
    )
  }
  
  export default CustomButton