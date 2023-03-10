function FilterCheckbox({filterShort, checkedForm }) {
  return (
    <div className='checkbox'>
      <label htmlFor='checkbox__toggle' className='checkbox__text'>
        Короткометражки
      </label>
      <input
        onChange={filterShort}
        checked={checkedForm}
        type='checkbox'
        id='checkbox__toggle'
        className='checkbox__button'    
      />
    </div>
  );
}

export default FilterCheckbox;
