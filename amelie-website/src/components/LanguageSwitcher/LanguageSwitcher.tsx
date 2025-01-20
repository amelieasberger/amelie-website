import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher(): React.JSX.Element {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.container}>
      <button className={styles.divider} onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
    </div>
  );
};
