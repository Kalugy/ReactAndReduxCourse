
import Button from './Button';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div
    className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className=''>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          {/* <GoBell /> */}
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          {/* <GoCloudDownload /> */}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          {/* <GoDatabase /> */}
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
