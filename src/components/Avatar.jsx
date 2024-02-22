const Avatar = () => {
  return (
    <div className="hidden lg:flex lg:max-w-none">
      <img 
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=""
        className="w-full h-full translate-z-0"
      />
    </div>
  );
};

export default Avatar;
