import logo from 'assets/images/logo.png';

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width: '100px', padding: '20px' }} />
    </div>
  );
};

export default Logo;
