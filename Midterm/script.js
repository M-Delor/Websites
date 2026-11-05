 async function getBooks() {

         try {
             const response = await fetch("https://upadhayay.github.io/db.json");
             const data = await response.json();

             const mybooks_div = document.querySelector(".mybooks");

            let count = 1;

         for (let book of data.books) {

            const single_book_div = document.createElement("div");

            if (book.published) {

            // Applied some CS 216 concepts to make each iteration of the loop increase the count to get a unique image for each book. The images are stored in the images folder and named as book1.jpg, book2.jpg, etc.
            
            single_book_div.innerHTML = `
            <img src="images/book${count}.jpg" alt="book image" class="book_img">
            <p> <b> ${book.title} </b> </p>
            <p> <b> Written In: </b> ${book.year} </p>`;

            single_book_div.classList.add('single_book');

            mybooks_div.append(single_book_div);

            count++;
            };
         };

            }
        catch(error) {
        // console.log("Error: ", error)
        console.log("Error in fetch");
          }
    }

    getBooks();