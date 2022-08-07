import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { bookSelected, reviews } from "../services/BookService";
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
  const [reviews, setReviews] = useState<reviews[]>([]);

  const handleFocus = () =>
    focusName ? setFocusName(false) : setFocusName(true);

  useEffect(() => {
    setBook(JSON.parse(sessionStorage.getItem("bookSelected") || "{}"));
    setReviews(JSON.parse(localStorage.getItem("reviews") || "[]"));
  }, []);

  useEffect(() => {
    nameUser && nameReview ? setDisableButton(false) : setDisableButton(true);
  }, [nameUser, nameReview]);
  const handleUploadReview = () => {
    setReviews((current) => [
      ...current,
      {
        nameUser,
        nameReview,
      },
    ]);
  };
  useEffect(() => {
    console.warn(reviews);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    setNameReview("");
    setNameUser("");
  }, [reviews]);

  return (
    <div>
      <Head>
        <title>Bookapp</title>
        <meta name="description" content="Bookapp" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.boxBack} onClick={() => router.back()}>
          <Image src="/images/back.png" alt="" width={20} height={20} />
        </div>
        <div className={styles.boxSelectedImg}>
          <Image
            src={
              book?.img ||
              "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
            }
            alt=""
            className={styles.imgBanner}
            width={163}
            height={250}
          />
        </div>
        <div className={styles.boxSection}>
          <div className={styles.starsBanner}>
            <Image src="/images/stars.png" alt="" width={"100%"} height={16} />
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
        <div className={styles.titleReview}>Reseñas</div>

        {reviews.map((review, i) => {
          {
            return (
              <div key={i} style={{ marginTop: 20 }}>
                <div className={styles.contentReview}>{review.nameReview}</div>

                <div className={styles.optionsReview}>
                  <div className={styles.userReview}>
                    {review.nameUser}
                    <span className={styles.timeReview}>º Hace 1 minuto</span>
                  </div>
                  <div className={styles.boxOptions}>
                    <div>
                      <Image
                        src="/images/edit.png"
                        alt=""
                        width={20}
                        height={20}
                        style={{ marginRight: 19 }}
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/trash.png"
                        alt=""
                        width={20}
                        height={20}
                        className={styles.marginLeft}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className={styles.separate}></div>
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
            onPress={handleUploadReview}
            className="buttonPublish"
          />
        </div>
      </main>
    </div>
  );
};

export default BookScreen;
