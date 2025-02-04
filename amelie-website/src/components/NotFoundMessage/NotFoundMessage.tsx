import Link from 'next/link';
import Header from '../Header/Header';
import styles from './NotFoundMessage.module.scss';
import Footer from '../Footer/Footer';

export default function NotFoundMessage(): React.JSX.Element {
    
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Sorry, this page can't be found. <br></br> But you found Maja!</h1>
                <div className={styles.image} />
                <Link className={styles.button} href="/">Go back to Home</Link>
            </div>
            <Footer />
        </div>
    );
}