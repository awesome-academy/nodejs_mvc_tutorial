$(() => {
  const deleteBook = async (id) => {
    const res = await fetch(
      `/books/${id}/delete`,
      {
        method: "POST"
      }
    );

    if (res.status === 200) {
      setTimeout(() => {
        window.location = '/books';
      }, 3000);
    } else {
      console.log('ERROR');
    }
  };

  // $(document).on('click', 'button#delete-book', async () => {
  //   console.log("================================")
  //   const bookId = window.location.pathname.split('/')[2];

  //   await deleteBook(bookId);
  // });
});
