import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import CommonHeader from '../CommonHeader/CommonHeader';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form className='form' name='search-form'>
          <button className='form__button' type='submit'></button>
          <div className='form__container'>
            <input className='form__input' placeholder='Фильм' required></input>
          </div>
        </form>

        <FilterCheckbox />
      </div>
      <CommonHeader text={''} color={'grey'} />
    </section>
  );
}

export default SearchForm;

