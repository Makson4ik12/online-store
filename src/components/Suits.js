import './Suits.css'

function Suits() {
  const suits = [
    {id: 0, img: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/c9d1b1222676416bf68677f5b7dbb6f629295b08",
     priceLeft: {cost: "1 899 ₴", top: "20%", left: "12%"}, priceRight: {cost: "899 ₴", top: "60%", left: "55%"}},
    {id: 1, img: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/81ef103c55fb161c0a22e565f4af829cadb90093",
    priceLeft: {cost: "1 899 ₴", top: "50%", left: "10%"}, priceRight: {cost: "899 ₴", top: "20%", left: "60%"}},
    {id: 2, img: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/0e7010878fedabf31e6d8ca8e91b715db4ea89c4",
    priceLeft: {cost: "1 899 ₴", top: "30%", left: "10%"}, priceRight: {cost: "899 ₴", top: "60%", left: "70%"}},
    {id: 3, img: "https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/796ab860adfaad961808d739b115492cca4406eb",
    priceLeft: {cost: "1 899 ₴", top: "70%", left: "20%"}, priceRight: {cost: "899 ₴", top: "40%", left: "15%"}}
  ];

  return (
    <div className="suits-container">
      {suits.map((item) => 
        <div className="suit-container" key={item.id}>
          <img src={item.img} />

          <div className="price-container" style={{top: item.priceLeft.top || 0, left: item.priceLeft.left || 0}}>
            <div className="price">
              <svg width="105" height="67" viewBox="0 0 105 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.49998 9.5L5.99998 6L8.99999 3H99L102 6L103.5 7L104.227 41.2124L102.688 41.8281L102 42L99 45L96 48L86 51L83 54H80V61H73L70 58L67 55L64 50L63.5853 48.9097H9.15639L5.99998 47L2.99998 44L2.49998 9.5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M99 0H9V3H6V6H3V9H0V44H3V47H6V50H64V55H67V58H70V61H73V64H80V67H83V64H80V61H83V54H86V51H96V48H99V45H102V42H105V6H102V3H99V0ZM99 3V6H102V42H99V45H96V48H86V51H83V54H80V61H73V58H70V55H67V50H64V47H6V44H3V9H6V6H9V3H99Z" fill="#1F1F1F"/>
              </svg>

              <p>{item.priceLeft.cost}</p>
            </div>
          </div>

          <div className="price-container" style={{top: item.priceRight.top || 0, left: item.priceRight.left || 0}}>
            <div className="price">
              <svg width="105" height="67" viewBox="0 0 105 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M102.5 9.5L99 6L96 3H6L3 6L1.5 7L0.77253 41.2124L2.312 41.8281L3 42L6 45L9 48L19 51L22 54H25V61H32L35 58L38 55L41 50L41.4146 48.9097H95.8436L99 47L102 44L102.5 9.5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6 0H96V3H99V6H102V9H105V44H102V47H99V50H41V55H38V58H35V61H32V64H25V67H22V64H25V61H22V54H19V51H9V48H6V45H3V42H0V6H3V3H6V0ZM6 3V6H3V42H6V45H9V48H19V51H22V54H25V61H32V58H35V55H38V50H41V47H99V44H102V9H99V6H96V3H6Z" fill="#1F1F1F"/>
              </svg>

              <p>{item.priceRight.cost}</p>
            </div>
          </div>
          
        </div>)}
    </div>
  );
}

export default Suits;