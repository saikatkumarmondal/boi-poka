import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
const ReadList = () => {
    const [ readList, setReadList ] = useState( [] );
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    const handleSort = (type) => {
      setSort(type);
      if (type === "pages") {
        const sortedByPage = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages
        );
        setReadList(sortedByPage);
      }

      if (type === "ratings") {
        const sortedByRatings = [...readList].sort(
          (a, b) => a.rating - b.rating
        );
        setReadList(sortedByRatings);
      }
    };
    useEffect(() => {
      const storedBookData = getStoredBook();
      const convertedStoredBook = storedBookData.map((id) => parseInt(id));
      const myReadList = data.filter((book) =>
        convertedStoredBook.includes(book.bookId)
      );

      setReadList(myReadList);
    }, []);
    return (
      <div>
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
          Sort By : {sort ? sort.toUpperCase() : ""}
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
        <Tabs>
          <TabList>
            <Tab>Read Book List</Tab>
            <Tab>My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Book I Read {readList.length} </h2>
            {readList.map((book, index) => (
              <Book book={book} key={index}></Book>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;