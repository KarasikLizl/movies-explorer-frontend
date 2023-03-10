import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import CommonHeader from '../CommonHeader/CommonHeader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleSearch, filterShort, checkedForm }) {
  const localStorageValue = localStorage.getItem('saveSearchValue');
  const location = useLocation();

  const [value, setValue] = useState(localStorageValue ?? '');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSearch(value);
  };

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      handleSearch(value);
      setValue('');
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      localStorage.setItem('saveSearchValue', value);
    }
  }, [value]);
  
  function setValues(event) {
    setValue(event.target.value)
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <form
          className='form'
          name='search-form'
          onSubmit={(e) => handleSubmitForm(e)}
        >
          <button className='form__button' type='submit'></button>
          <div className='form__container'>
            <input
              className='form__input'
              placeholder='Фильм'
              required
              onChange={setValues}
              value={value}
            ></input>
          </div>
        </form>
        <FilterCheckbox filterShort={filterShort} checkedForm={checkedForm} />
      </div>
      <CommonHeader text={''} color={'grey'} />
    </section>
  );
}

export default SearchForm;
