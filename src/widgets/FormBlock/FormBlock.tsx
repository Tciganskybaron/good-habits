import Boy from '@assets/svg/boy.svg?react';
import CloudForm from '@assets/svg/cloud-form.svg?react';

import './index.css';

function FormBlock() {
  return (
    <section className="form__block">
      <div className="form__block_box1">
        <div className="form__block_text form__block_text_help">
          ПОДДЕРЖИ ФОНД «ПОМОЩЬ»
        </div>
        <div className="form__block_text form__block_text_info">
          <span>
            Благотворительный фонд «ПОМОЩЬ» помогает детям и взрослым по всей
            России.
          </span>
          <span>
            Уже сегодня многие подопечные получили необходимую поддержку, прошли
            нужное лечение и отправились на реабилитацию.
          </span>
        </div>
        <div className="form__block_box_cloud">
          <CloudForm />
        </div>
        <Boy />
      </div>
      <div className="form__block_box2">
        <div className="form__block_form_box">
          <form id="form" className="form__block_form"></form>
        </div>
        <div className="form__block_social">
          <span className="form__block_social-text">Поделиться:</span>
          <div className="form__block_social-link-group">
            <a
              href="https://ok.ru/group/59052669665332"
              target="_blank"
              aria-label="Поделиться в одноклассниках"
              className="form__block_social-link form__block_social-link-classmates"
            />
            <a
              href="https://t.me/fond_pomosch"
              target="_blank"
              aria-label="Поделиться в телеграмм"
              className="form__block_social-link form__block_social-link-telegramm"
            />
            <a
              href="https://vk.com/fond_pomosch"
              target="_blank"
              aria-label="Поделиться в вконтакте"
              className="form__block_social-link form__block_social-link-vk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormBlock;
