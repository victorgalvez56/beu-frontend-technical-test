import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  GeneralResponse,
  getSearchBooks,
  items,
} from "../services/BookService";
import { word } from "../services/recoils/atoms";
import { sendEmail } from "../services/recoils/selectors";
import styles from "../styles/Home.module.css";
import InputCustom from "./customComponents/inputCustom";
import LoadingCustom from "./customComponents/loadingCustom";

const Home: NextPage = () => {
  const [focusWord, setFocusWord] = useState(false);
  // const [search, setSearch] = useRecoilState(word);
  const [word, setWord] = useState("Javascript");
  const [books, setBooks] = useState<items[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFocus = () =>
    focusWord ? setFocusWord(false) : setFocusWord(true);

  useEffect(() => {
    const delayWriteFn = setTimeout(() => {
      if (word) {
        setLoading(true);
        getSearchBooks(
          encodeURIComponent(word),
          (result: GeneralResponse) => {
            setBooks(result.items);
            setLoading(false);
          },
          (e) => console.error(e)
        );
      }
    }, 1000);

    return () => clearTimeout(delayWriteFn);
  }, [word]);
  const BooksList = () => {
    // const books: items[] = useRecoilValue(sendEmail);
    return (
      <div className={styles.section}>
        {books.map((book, i) => {
          {
            if (i <= 2) return null;

            return (
              <div key={i}>
                <div
                  onClick={() =>
                    sessionStorage.setItem(
                      "bookSelected",
                      JSON.stringify({
                        img: book.volumeInfo.imageLinks?.thumbnail,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        description: book.volumeInfo.description,
                      })
                    )
                  }
                >
                  <Link
                    href={{
                      pathname: "/BookScreen",
                      query: {
                        img: book.volumeInfo.imageLinks?.thumbnail,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        description: book.volumeInfo.description,
                      },
                    }}
                  >
                    <Image
                      src={
                        book.volumeInfo.imageLinks?.thumbnail ||
                        "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
                      }
                      alt="book"
                      className={styles.imgSection}
                      width={"100%"}
                      height={125.8}
                    />
                  </Link>
                </div>

                <div className={styles.boxSection}>
                  <div className={styles.starsSection}>
                    <Image
                      src="/images/stars.png"
                      alt="stars"
                      width={"100%"}
                      height={16}
                    />
                  </div>
                  <div className={styles.section2}>
                    <div className={styles.section3}>
                      <div className={styles.titleSection}>
                        {book.volumeInfo.title}
                      </div>
                      <div className={styles.textSection}>
                        {book.volumeInfo.authors}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const BooksListBanner = () => {
    // const books: items[] = useRecoilValue(sendEmail);
    return (
      <div>
        <div className={styles.sectionBanner}>
          {books.map((book, i) => {
            {
              if (i >= 2) return null;
              return (
                <div key={i}>
                  <div
                    onClick={() =>
                      sessionStorage.setItem(
                        "bookSelected",
                        JSON.stringify({
                          img: book.volumeInfo.imageLinks?.thumbnail,
                          title: book.volumeInfo.title,
                          authors: book.volumeInfo.authors,
                          description: book.volumeInfo.description,
                        })
                      )
                    }
                  >
                    <Link
                      href={{
                        pathname: "/BookScreen",
                        query: {
                          img: book.volumeInfo.imageLinks?.thumbnail,
                          title: book.volumeInfo.title,
                          authors: book.volumeInfo.authors,
                          description: book.volumeInfo.description,
                        },
                      }}
                    >
                      <Image
                        src={
                          book.volumeInfo.imageLinks?.thumbnail ||
                          "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
                        }
                        alt="book"
                        className={styles.imgSection}
                        width={163}
                        height={250}
                      />
                    </Link>
                  </div>

                  <div className={styles.boxBanner}>
                    <div className={styles.starsBanner}>
                      <Image
                        src="/images/stars.png"
                        alt="starts"
                        width={"100%"}
                        height={16}
                      />
                    </div>
                    <div className={styles.section2}>
                      <div className={styles.section3}>
                        <div className={styles.titleBanner}>
                          {book.volumeInfo.title}
                        </div>
                        <div className={styles.textBanner}>
                          {book.volumeInfo.authors}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerBrand}>
          <Image
            src="/images/brand.png"
            alt="Logo"
            width={135.06}
            height={39}
          />
        </div>
        <InputCustom
          handleFocus={handleFocus}
          focus={focusWord}
          icon={true}
          value={word}
          setValue={setWord}
          className="containerSearch"
        />
        {/* <React.Suspense
          fallback={
          <LoadingCustom />
          }
        > */}
        {loading ? (
          <LoadingCustom />
        ) : (
          <div>
            <BooksListBanner />
            <BooksList />
          </div>
        )}
        {/* </React.Suspense> */}
      </main>
    </div>
  );
};

export default Home;
