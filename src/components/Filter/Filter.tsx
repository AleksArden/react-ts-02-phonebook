
import css from './Filter.module.css';

interface IProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

export const Filter = ({ onChange, value }: IProps) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
