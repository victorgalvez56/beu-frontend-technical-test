import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { bookSelected } from "../services/BookService";
import styles from "../styles/Book.module.css";
import ButtonCustom from "./customComponents/buttonCustom";
import InputCustom from "./customComponents/inputCustom";
import TeaxAreaCustom from "./customComponents/textareaCustom";

const BookScreen: NextPage = () => {
  const router = useRouter();
  const [book, setBook] = useState<bookSelected>();
  const [nameUser, setNameUser] = useState("");
  const [nameReview, setNameReview] = useState("");
  const [focusName, setFocusName] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const handleFocus = () =>
    focusName ? setFocusName(false) : setFocusName(true);

  const handlePublish = () => {
    setDisableButton(false);
  };
  useEffect(() => {
    setBook(JSON.parse(sessionStorage.getItem("bookSelected") || "{}"));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bookapp" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.boxBack} onClick={() => router.back()}>
          <img src="/images/back.png" alt="" className={styles.iconBack} />
        </div>
        <img src={book?.img} alt="" className={styles.imgBanner} />
        <div className={styles.boxSection}>
          <div className={styles.starsBanner}>
            <img src="/images/stars.png" alt="" width={"100%"} />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section3}>
            <div className={styles.titleBanner}>{book?.title}</div>
            <div className={styles.textBanner}>{book?.authors}</div>
          </div>
        </div>
        <div className={styles.boxDescription}>
          <div className={styles.description}>{book?.description}</div>
          <div className={styles.separate}></div>
        </div>
        <div className={styles.titleReview}>Escribe una reseña</div>
        <label className={styles.labelNameUser}>Nombre de usuario</label>
        <InputCustom
          handleFocus={handleFocus}
          focus={focusName}
          value={nameUser}
          setValue={setNameUser}
          className="containerInput"
        />

        <div className={styles.boxReview}>
          <label className={styles.titleReview}>Reseña</label>
          <TeaxAreaCustom
            rows={10}
            value={nameReview}
            setValue={setNameReview}
            className="containerReview"
          />
        </div>
        <div className={styles.boxPublish}>
          <ButtonCustom
            text={"Publicar"}
            disabled={disableButton}
            onPress={handlePublish}
            className="buttonPublish"
          />
        </div>
      </main>
    </div>
  );
};

export default BookScreen;
