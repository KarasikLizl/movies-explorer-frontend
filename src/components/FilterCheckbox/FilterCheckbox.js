function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label htmlFor='checkbox__button' className='checkbox__text'>
        Короткометражки
      </label>
      <input
        type='checkbox'
        id='checkbox__toggle'
        className='checkbox__button'
      />
    </div>
  );
}

export default FilterCheckbox;
