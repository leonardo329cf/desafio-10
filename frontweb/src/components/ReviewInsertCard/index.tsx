import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../util/requests';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import './styles.css';

type Props = {
  movieId: string;
  refresh: Function;
};

type FormData = {
  text: string;
};

const ReviewInsertCard = ({ movieId, refresh }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.text,
        movieId: parseInt(movieId),
      },
    };
    requestBackend(params)
      .then((response) => {
        toast.success("Avaliação enviada")
        setValue('text','');     
        if (refresh !== undefined) {
          refresh();
        }
      })
      .catch(() => {
        toast.error("Erro ao submeter avaliação");
      });
  };

  return (
    <div className="review-insert-card-container bg-secondary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          type="text"
          className={`form-control base-input ${
            errors.text ? 'is-invalid' : ''
          }`}
          placeholder="Deixe sua avaliação aqui"
          name="text"
        />
        <div className="invalid-feedback d-block">
                {errors.text?.message}
              </div>
        <button className="btn btn-tertiary">
          <h6>SALVAR AVALIAÇÃO</h6>
        </button>
      </form>
    </div>
  );
};
export default ReviewInsertCard;
