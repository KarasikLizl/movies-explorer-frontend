import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import CommonHeader from '../CommonHeader/CommonHeader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleSearch, filterShort }) {
  const localStorageValue = localStorage.getItem('saveSearchValue');
  const localChecked = JSON.parse(localStorage.getItem('saveCheckMovie'));
  const location = useLocation();

  const [value, setValue] = useState(localStorageValue ?? '');
  const [checked, setChecked] = useState(localChecked);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSearch(value);
    setChecked(false);
  };

  useEffect(() => {
    if (location.pathname === '/movies') {
      localStorage.setItem('saveSearchValue', value);
      localStorage.setItem('saveCheckMovie', checked);
    } else if (location.pathname === '/saved-movies') {
      filterShort(checked);
      setValue('');
      setChecked(false);
    }
  }, [value, checked, location]);

  useEffect(()=> {
    if (location.pathname === '/movies') {
      handleSearch(localStorageValue ?? '');
      filterShort(checked);
    }
  }, [location, checked])

  function setValues(event) {
    setValue(event.target.value);
  }

  function setCheck() {
    setChecked(!checked);
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
        <FilterCheckbox filterShort={setCheck} checkedForm={checked} />
      </div>
      <CommonHeader text={''} color={'grey'} />
    </section>
  );
}

export default SearchForm;
