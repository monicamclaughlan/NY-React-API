# Project Overview

## Project Links

- [github Repository](https://github.com/monicamclaughlan/NY-React-API)
- [add your deployment link]()

## Project Description

My final project will be a way to find your next great read by referencing the current books on the NY Times bestseller lists by genre. There will ba component devoted to each genre that will list the books in order of rank.

## API

I chose the NY Times Book API to call books that are bestsellers by genre.

Example for the paperback nonfiction genre:
https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=eNetSKoCDjuFllCX5kndIoGNknTPGYXj

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.

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

- [add link to your wireframes]()
- [add link to your react architecture]()

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
