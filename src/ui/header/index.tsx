const Header: React.FC = () => (
  <div className="flex justify-end items-center w-screen py-8 px-8 md:py-16 md:px-16 gap-3 md:gap-5">
    <a className="bg-[#fff]/[20%] rounded-[8px] flex justify-center items-center px-4 md:px-16 py-4">
      <span className="text-[#f5f5f5] text-sm md:text-bg capitalize">whitepaper</span>
    </a>
    <a className="bg-[#00a682]/[20%] rounded-[8px] flex justify-center items-center px-4 md:px-16 py-4">
      <span className="text-[#f5f5f5] text-sm md:text-bg capitalize">for devs</span>
    </a>
    <a className="bg-[linear-gradient(#15889a,_#072e34)] rounded-[8px] flex justify-center items-center px-4 md:px-16 py-4 shadow-sm shadow-[#15889a]">
      <span className="text-[#f5f5f5] text-sm md:text-bg capitalize font-semibold">play now</span>
    </a>
  </div>
);

export default Header;
