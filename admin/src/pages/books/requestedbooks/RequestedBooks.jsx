import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import RequestedBookTable from '../../../components/table/RequestedBookTable';

const RequestedBooks = () => {
  return (
    <div className="listUser">
      <Sidebar />
      <div className="listCont">
        <Navbar />
        <RequestedBookTable />
      </div>
    </div>
  );
};

export default RequestedBooks;
