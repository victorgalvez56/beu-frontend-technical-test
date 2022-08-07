import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useRecoilState, useRecoilValue } from "recoil";
import { items } from "../services/BookService";
import { word } from "../services/recoils/atoms";
import { sendEmail } from "../services/recoils/selectors";
import styles from "../styles/Home.module.css";
import InputCustom from "./customComponents/inputCustom";

const Home: NextPage = () => {
  const [focusWord, setFocusWord] = useState(false);
  const [search, setSearch] = useRecoilState(word);

  const handleFocus = () =>
    focusWord ? setFocusWord(false) : setFocusWord(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookapp</title>
        <meta name="description" content="Bookapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          value={search}
          setValue={setSearch}
          className="containerSearch"
        />
        <React.Suspense
          fallback={
            <div className={styles.loader}>
              <svg
                width="86"
                height="29"
                viewBox="0 0 57 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9266 10.0326C15.6086 10.7677 15.1665 11.4067 14.5994 11.9488C15.9516 12.4409 17.0118 13.201 17.7679 14.2361C18.556 15.2452 18.949 16.4874 18.949 17.9606C18.949 19.0167 18.753 19.9868 18.3599 20.872C17.9679 21.7321 17.4138 22.4812 16.7007 23.1203C16.0116 23.7344 15.1665 24.2264 14.1564 24.5935C13.1712 24.9395 12.0901 25.1105 10.91 25.1105H0.102539V0.777344H8.69768C9.82882 0.777344 10.863 0.948366 11.7951 1.29841C12.7512 1.61645 13.5643 2.07251 14.2284 2.66159C14.9175 3.25067 15.4486 3.96377 15.8156 4.79887C16.2076 5.63398 16.4047 6.5581 16.4047 7.56424C16.4047 8.47336 16.2477 9.29446 15.9266 10.0326ZM8.32663 5.0549H4.93317V10.6206H8.32663C9.36175 10.6206 10.1459 10.3636 10.6889 9.84654C11.228 9.33247 11.499 8.65537 11.499 7.82027C11.499 6.96016 11.231 6.28607 10.6889 5.794C10.1469 5.30194 9.35776 5.0549 8.32663 5.0549ZM10.5429 20.833C11.6491 20.833 12.4982 20.5649 13.0873 20.0229C13.7043 19.4838 14.0114 18.7307 14.0084 17.7745C14.0084 16.8394 13.7014 16.1043 13.0873 15.5623C12.4982 14.9952 11.6491 14.7131 10.5429 14.7131H4.93317V20.8319H10.5429V20.833ZM33.5699 6.75313C34.6301 7.19519 35.5252 7.79527 36.2633 8.55836C37.0263 9.31847 37.6044 10.2176 37.9905 11.2487C38.4075 12.2799 38.6186 13.386 38.6186 14.5671C38.6186 15.0842 38.5826 15.5873 38.5076 16.0803C38.5035 16.1043 38.4997 16.1293 38.4956 16.1534C38.4906 16.1823 38.4866 16.2113 38.4826 16.2394V16.2414C38.4677 16.3404 38.4526 16.4364 38.4366 16.5304C38.3615 16.9725 37.9795 17.2975 37.5304 17.2975H25.4488C25.7699 18.4747 26.384 19.3738 27.2931 19.9879C28.2032 20.6009 29.3233 20.908 30.6505 20.908C31.6347 20.908 32.5348 20.751 33.344 20.4299C33.8939 20.2049 34.4251 19.9339 34.9391 19.6128C35.3921 19.3308 35.9882 19.4768 36.2633 19.9339L37.3404 21.7361C37.5935 22.1612 37.4794 22.7062 37.0804 22.9993C36.2453 23.6053 35.3571 24.1014 34.415 24.4875C33.2088 24.9545 31.9067 25.1866 30.5045 25.1866C29.0523 25.1866 27.7141 24.9405 26.484 24.4475C25.2568 23.9584 24.1967 23.2813 23.3116 22.4212C22.4264 21.5611 21.7274 20.5549 21.2103 19.3988C20.7182 18.2426 20.4712 16.9905 20.4712 15.6383C20.4712 14.2861 20.7172 13.034 21.2103 11.8778C21.7023 10.7257 22.3804 9.71552 23.2406 8.85541C24.1007 7.99529 25.1098 7.32121 26.266 6.82914C27.4471 6.33708 28.7133 6.09004 30.0654 6.09004C31.3436 6.08904 32.5138 6.31008 33.5699 6.75313ZM27.0801 11.1017C26.292 11.7408 25.7529 12.6359 25.4569 13.792V13.7951H33.831C33.781 12.6139 33.3779 11.7048 32.6148 11.0657C31.8518 10.4266 30.9416 10.1056 29.8855 10.1056C28.7993 10.1066 27.8682 10.4386 27.0801 11.1017Z"
                  fill="#0F1429"
                ></path>
                <path
                  d="M45.1226 6.62322V16.6356C45.1226 17.7176 45.4547 19.0799 46.1197 19.719C46.7848 20.334 47.61 20.641 48.592 20.641C49.5532 20.641 50.3643 20.334 51.0293 19.719C51.6945 19.0799 52.0265 17.7176 52.0265 16.6356V13.2691C52.0265 12.933 52.3696 12.708 52.6807 12.84C52.6826 12.84 52.6836 12.841 52.6836 12.842C52.6845 12.843 52.6856 12.844 52.6877 12.844C53.2596 13.0871 53.8667 13.2081 54.4889 13.2081C55.1109 13.2081 55.718 13.0871 56.2901 12.844C56.295 12.842 56.3001 12.841 56.3041 12.839C56.306 12.838 56.3081 12.837 56.31 12.837C56.3121 12.836 56.3151 12.835 56.3181 12.834C56.6291 12.702 56.9722 12.927 56.9722 13.2631V16.2325C56.9722 17.5366 56.7501 19.2198 56.3071 20.277C55.889 21.3092 55.299 22.1953 54.5349 22.9354C53.7957 23.6755 52.9096 24.2396 51.8765 24.6325C50.8693 25.0256 49.7723 25.2227 48.589 25.2227C47.3809 25.2227 46.2627 25.0266 45.2267 24.6325C44.2195 24.2396 43.3293 23.6715 42.5683 22.9354C41.8282 22.1953 41.2391 21.3092 40.796 20.277C40.378 19.2189 40.167 17.5366 40.167 16.2325V6.62322C40.174 6.36618 40.385 6.15515 40.6421 6.15515H44.6545C44.9116 6.15515 45.1226 6.36618 45.1226 6.62322Z"
                  fill="#0F1429"
                ></path>
                <path
                  d="M54.4955 11.0657C55.8785 11.0657 56.9998 9.94443 56.9998 8.56133C56.9998 7.17824 55.8785 6.05701 54.4955 6.05701C53.1124 6.05701 51.9912 7.17824 51.9912 8.56133C51.9912 9.94443 53.1124 11.0657 54.4955 11.0657Z"
                  fill="#66D3D5"
                ></path>
              </svg>
              <BallTriangle
                height={50}
                width={50}
                radius={5}
                color="#66D3D5"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{ display: "block" }}
                visible={true}
              />
            </div>
          }
        >
          <BooksListBanner />
          <BooksList />
        </React.Suspense>
      </main>
    </div>
  );
};

const BooksList = () => {
  const books: items[] = useRecoilValue(sendEmail);
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
                    width={92.53}
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
  const books: items[] = useRecoilValue(sendEmail);
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
export default Home;
