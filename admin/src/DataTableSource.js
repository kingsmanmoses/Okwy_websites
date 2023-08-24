export const userColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 250 },
  { field: 'fullName', headerName: 'Full-Name', width: 250 },
  { field: 'email', headerName: 'Email Address', width: 300 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 200,
  },
];

export const booksColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  { field: 'bookName', headerName: 'Book-Name', width: 160 },
  { field: 'bookAuthor', headerName: 'Author-Name', width: 160 },
  {
    field: 'bookImg',
    headerName: 'Book-Img',
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={
                params.row.bookImg ||
                'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
              alt=""
            />
          </div>
        </>
      );
    },
  },
  { field: 'bookPdf', headerName: 'Book-PDF', width: 160 },
  { field: 'bookVid', headerName: 'Book-Vid', width: 160 },
  { field: 'bookCategory', headerName: 'Book-Category', width: 160 },
];
