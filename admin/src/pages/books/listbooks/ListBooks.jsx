import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import BookTable from '../../../components/userData/BookTable';

const ListBooks = () => {
  return (
    <div className="listUser">
      <Sidebar />
      <div className="listCont">
        <Navbar />
        <BookTable />
      </div>
    </div>
  );
};

export default ListBooks;
