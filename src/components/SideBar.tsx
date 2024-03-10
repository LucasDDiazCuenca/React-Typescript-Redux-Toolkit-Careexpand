import SideBarMenuItem from "./SideBarMenuItem";

const SideBar= () => {
  return (
    <header className="bg-[#576432] w-1/5 text-white">
      <div className="flex gap-4 m-6 items-center">
        <img
          src="/users/userLogo.png"
          alt="Image of user's first name letter and first lastname letter"
          className="rounded-lg w-1/5 h-1/5"
        />
        <div>
          <p className="font-bold">Lucas Diaz</p>
          <p className="font-thin">Candidate</p>
        </div>
      </div>

      <nav>
        <ul className="flex flex-col gap-8 mt-20 m-6 pb-72 font-medium">
          <li>
            <SideBarMenuItem menuItemName="Dashboard" />
          </li>
          <li>
            <SideBarMenuItem menuItemName="Patients" />
          </li>
          <li>
            <SideBarMenuItem menuItemName="Doctors" />
          </li>
          <li>
            <SideBarMenuItem menuItemName="Visits" />
          </li>
          <li>
            <SideBarMenuItem menuItemName="Treatments" />
          </li>
        </ul>
        <hr className="mx-3" />
        <a href="#" className="flex gap-2 items-center m-6">
          <img
            src="/menu-icons/log-out.png"
            alt="icon of log out"
            className="w-8 h-8 p-2"
          />
          <p>Log out</p>
        </a>
      </nav>
    </header>
  );
}

export default SideBar;