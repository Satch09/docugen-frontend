import { useForm } from "react-hook-form";
import useSwr from "swr";
import styles from "../styles/Home.module.css";
export default function GenerationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSwr("/api/generate_instruments", fetcher);

  if (error) return <div>Failed to load reports</div>;
  if (!data) return <div>Loading...</div>;
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.card_container}>
        <h2>Generate Template</h2>
        <ul className={styles.list}>
          {data.map((input) => {
            return (
              <>
                <li className={styles.list_item}>
                  <label key={input.register}>{input.label}</label>
                  <input
                    disabled={input.disabled}
                    key={input.label}
                    {...input}
                    {...register(input.register)}
                    {...input.options}
                  />
                </li>
              </>
            );
          })}
        </ul>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </div>
    </form>
  );
}
