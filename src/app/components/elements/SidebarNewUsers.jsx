import React from 'react';

const SidebarNewUsers = () => (
  <div className="c-sidebar__module">
    <div className="c-sidebar__header">
      <h3 className="c-sidebar__h3">New to Whaleshares?</h3>
    </div>
    <div className="c-sidebar__content">
      <ul className="c-sidebar__list">
        {/* <li className="c-sidebar__list-item"><a className="c-sidebar__link" href="/pick_account">Sign up</a></li> */}
        <li className="c-sidebar__list-item"><a className="c-sidebar__link" href="/claim.html">Claim Account</a></li>
        <li className="c-sidebar__list-item"><a className="c-sidebar__link" href="/welcome">Welcome</a></li>
        <li className="c-sidebar__list-item"><a className="c-sidebar__link" href="/faq.html">FAQ</a></li>
      </ul>
    </div>
  </div> 
);

export default SidebarNewUsers;

