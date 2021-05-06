# Project Overview

## Project Links

- [github Repository](https://github.com/monicamclaughlan/NY-React-API)
- [live site link](https://kind-torvalds-59bbd1.netlify.app/)

## Project Description

My final project will be a way to find your next great read by referencing the current books on the NY Times bestseller lists by genre. There will be a component devoted to each genre that will list the books in order of rank.  The user will then be able to click on each book to get a review of the book, and then be able to add this book to their reading list. 

## API

I chose the NY Times Book API to call books that are bestsellers by genre.

Example for the paperback nonfiction genre:
https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=eNetSKoCDjuFllCX5kndIoGNknTPGYXj

```
{data: {
     {
        "rank": 2,
        "rank_last_week": 2,
        "weeks_on_list": 54,
        "asterisk": 0,
        "dagger": 0,
        "primary_isbn10": "1571313567",
        "primary_isbn13": "9781571313560",
        "publisher": "Milkweed Editions",
        "description": "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
        "price": "0.00",
        "title": "BRAIDING SWEETGRASS",
        "author": "Robin Wall Kimmerer",
        "contributor": "by Robin Wall Kimmerer",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
        "book_image_width": 321,
        "book_image_height": 495,
        "amazon_product_url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
        "age_group": "",
        "book_review_link": "",
        "first_chapter_link": "",
        "sunday_review_link": "",
        "article_chapter_link": "",
        "isbns": [
          {
            "isbn10": "1571313567",
            "isbn13": "9781571313560"
          },
          {
            "isbn10": "1515975908",
            "isbn13": "9781515975908"
          },
          {
            "isbn10": "1571318712",
            "isbn13": "9781571318718"
          },
          {
            "isbn10": "1571311777",
            "isbn13": "9781571311771"
          }
        ],
        "buy_links": [
          {
            "name": "Amazon",
            "url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20"
          },
          {
            "name": "Apple Books",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BRAIDING+SWEETGRASS&author=Robin+Wall+Kimmerer"
          },
          {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781571313560"
          },
          {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBRAIDING%252BSWEETGRASS%252FRobin%252BWall%252BKimmerer%252F9781571313560&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBRAIDING%252BSWEETGRASS%252BRobin%252BWall%252BKimmerer"
          },
          {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781571313560&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBRAIDING%2BSWEETGRASS"
          },
          {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781571313560%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBRAIDING%2BSWEETGRASS%2BRobin%2BWall%2BKimmerer%26aff%3DNYT"
          }
        ],
        "book_uri": "nyt://book/194ea111-42ad-5795-9fb5-3e155ffa5e79"
      },
    }
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Desktop Wireframe](https://www.figma.com/file/eyIS7VmOAdNQvft55sfrNV/React-Book-Project--Desktop?node-id=0%3A1)
- [Mobile Wireframe](https://www.figma.com/file/uzaFUngAvWoeShBz0J1L8d/React-Book-Project---Mobile?node-id=0%3A1)
- [React Architecture](https://www.figma.com/file/R6DcvvcjgaVLC4qlph0o5z/React-Architecture---Project-2?node-id=0%3A1)

### MVP/PostMVP - 5min

#### MVP 

- Find and use external api to create list of books on the bestseller list by genre
- Make a second call to the api to get the review of each book when clicked on
- Render data on page
- Allow user to interact with the page and create reading list

#### PostMVP 

- Add Form to search through lists 

## Components


| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Nav       |          This will render the nav bar with links to each genre|
| Main      |          This will show a list of bestselling books by genre  |
| Fiction   |          This will contain the list of Fiction books          |
| NonFiction|          This will contain the list of Nonfiction books       |
| True Crime|          This will contain the list of True Crime books       |
| Self Help |          This will contain the list of Self Help books        |
|ReadingList|          This will contain list of books user wants to read   |
|Book Review|          This will contain review of each book                |
|Search Form|          Able to search by title                              |


- [Time-Priority Matrix](https://docs.google.com/spreadsheets/d/16aDWGDzB2D1AZdw1CxAAtfeCEYMYQ9sKih-R3A2aB9c/edit#gid=417043777)

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Project Planning |    H     |      3hrs      |     3hrs        |      3hrs    |
| Create react app |    H     |      1hr       |     0.5hrs        |      0.5hrs    |
| Set up Routes    |    H     |      1hrs      |     0.5hrs        |      0.5hrs    |
| Nav Bar          |    H     |      1hrs      |     0.5hrs        |      0.5hrs    |
| Fiction List     |    H     |      2hrs      |     1hrs        |      1hrs    |
| Nonfiction List  |    H     |      2hrs      |     1hrs        |   1hrs       |
| True Crime List  |    H     |      2hrs      |     1hrs        |   1hrs       |
| Self Help List   |    H     |      2hrs      |     1hrs        |   1hrs       |
| Click Review     |    H     |      3hrs      |     3hrs        |   3hrs       |
| User Read List   |    H     |      3hrs      |     2hrs        |   2hrs       |
| Search Form      |    H     |      3hrs      |     1hrs        |   1hrs       |
| Working with API |    H     |      3hrs      |     2hrs        |   2hrs       |
| Style Components |    H     |      4hrs      |     5hrs        |      5hrs    |
| Total            |    H     |      30hrs     |      21.5hrs       |    21.5hrs      |

## Additional Libraries



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

Function that on click scrolls back to the top of the page.

```
        <>
            <div>gR</div>
            <p>Copyright 2021</p>
            <p className="back-to-top" onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })}>Back to Top</p>
        </>
```

Function to filter search input

```
    const handleChange = (e) => {
		e.preventDefault();
		setSearchResults(list.filter(r => r.title.toLowerCase().includes(e.target.value.toLowerCase()) || r.author.toLowerCase().includes(e.target.value.toLowerCase())))
	}
```