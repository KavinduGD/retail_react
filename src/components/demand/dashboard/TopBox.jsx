function TopBox({ top }) {
  if (!top || top.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="topBox font-tinos">
      <h2 className="font-tinos mb-6 text-left text-lg">
        Top Demanding Products
      </h2>
      <div className="list">
        {top.map((user) => (
          <div className="flex items-center justify-between mb-7" key={user.id}>
            <div className=" flex gap-5">
              <img
                src={user.img}
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col gap-[5px]">
                <span className="text-sm font-bold " style={{ color: "#666" }}>
                  {user.username}
                </span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
            </div>
            <span className="font-bold" style={{ color: "#000" }}>
              {user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
