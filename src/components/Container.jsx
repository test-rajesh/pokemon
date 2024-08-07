export default function Container({ children }) {
  return (
    <div className="bg-base-100 flex justify-center">
      <div className="navbar  w-full lg:w-4/5">{children}</div>
    </div>
  );
}
