import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UserTable from '../../components/userData/UserTable';

const ListUser = () => {
  return (
    <div className="listUser">
      <Sidebar />
      <div className="listCont">
        <Navbar />
        <UserTable />
      </div>
    </div>
  );
};

export default ListUser;
