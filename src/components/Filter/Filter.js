import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({value, onChange}) {
    return (
         <form className={css.form}>
            <label className={css.find}>
                Find by name
                <input value={value} onChange={onChange} type="text"></input>
            </label>
         </form>
    )
}


Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};