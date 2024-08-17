export default function Container({ children }) {
  return (
    <div className="dark:bg-base-100 bg-white flex justify-center">
      <div className="navbar  w-full lg:w-4/5">{children}</div>
    </div>
  );
}
