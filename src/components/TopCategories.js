import './TopCategories.css'
import PinkVectorText from './PinkVectorText'

const TopCategories = () => {
  return (
    <div className="top-categories-container">
      <TopCategoriesLeft />
      <TopCategoriesRight />
    </div>
  );
}

const TopCategoriesLeft = () => {
  const items = {
    topImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/f4961a2caa68814c1c3b64c237fdc8448c80aaa0",
    leftImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/bb90448d074fe4c20508a015bc0fa52cacdd3fa8",
    rightImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/2c0a8990ab159620d362c122b8c22ff8a877485b",
    altTop: "Футболки", altLeft: "Низ", altRight: "Верх"
  };

  return (
    <div className="top-categories-half-container">
      <div className="big-image-container">
        <img className="big-image" src={items.topImage} alt={items.altTop} />
        <PinkVectorText textId="top-big" text="ФУТБОЛКИ" />
      </div>

      <div className="small-images-container">
        <div className="small-image-container">
          <img className="small-image" src={items.leftImage} alt={items.altLeft} />
          <PinkVectorText textId="top-small-left" text="НИЗ" />
        </div>
        <div className="small-image-container">
          <img className="small-image" src={items.rightImage} alt={items.altRight} />
          <PinkVectorText textId="top-small-right" text="ВЕРХ" />
        </div>
      </div>
    </div>
  );
}

const TopCategoriesRight = () => {
  const items = {
    bottomImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/b64d0c258e155538dee74904923800a5283e4096",
    leftImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/4a399ecb4a8672884f335c05c27780a4e28db931",
    rightImage: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/46f18d9f27511b7886568f63cf471fe85d8e15a6",
    altBottom: "Худи", altLeft: "Платья", altRight: "Костюмы"
  };

  return (
    <div className="top-categories-half-container">
      <div className="small-images-container">
        <div className="small-image-container">
          <img className="small-image" src={items.leftImage} alt={items.altLeft} />
          <PinkVectorText textId="bottom-small-left" text="ПЛАТЬЯ"/>
        </div>
        <div className="small-image-container">
          <img className="small-image" src={items.rightImage} alt={items.altRight} />
          <PinkVectorText textId="bottom-small-right" text="КОСТЮМЫ" />
        </div>
      </div>
      
      <div className="big-image-container">
        <img className="big-image" src={items.bottomImage} alt={items.altBottom} />
        <PinkVectorText textId="bottom-big" text="ХУДИ"/>
      </div>
    </div>
  );
}

export default TopCategories;