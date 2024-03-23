import { ReactComponent as Logo } from "../../icons/profile.svg";
import AdminBtn from "../AdminBtn/AdminBtn";
import './Club.scss';

const ClubHeader = ({handleTabs, activeTab, toggleModal}) => {

  return (
    <div className="club__content club__content-header">
      <div className="club__header-content">
        <div className="club__header-image">
          <Logo />
        </div>
        <div className="club__header-text">
          <h2 className="club__header-title">Collective Action Towards Strays</h2>
          <p className="club__header-subtitle">Co-Curricular / Interest</p>
          <p className="club__header-name">Moderator:</p>
          <AdminBtn editModal={toggleModal} editModalId="editClub" />
        </div>
      </div>
      <div className={ activeTab ? `club__header-actions about` : 'club__header-actions forum'}>
        <button type="button" className={ activeTab ? `active` : ''} onClick={handleTabs}>ABOUT</button>
        <button type="button" className={ !activeTab ? `active` : ''} onClick={handleTabs}>FORUM</button>
      </div>
    </div>
  )
};

export default ClubHeader;