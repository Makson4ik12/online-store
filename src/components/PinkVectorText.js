import './PinkVector.css'

const PinkVectorText = ({
  top = "0%",
  left = "0%",
  rotate = "0deg",
  width = "50px",
  textSize = "1vw",
  text = "Pink text"
}) => {

  return (
    <div className="pink-vector-text-container" style={{top: top, left: left, rotate: rotate}}>
      <svg width={width} height="60" viewBox="0 0 181 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35189 35.1044L1.92186 30.2118L0.028912 10.6414C1.68591 7.85536 7.47002 2.12014 17.3505 1.4678C29.7011 0.652364 35.4142 -0.172465 49.6073 0.0313937C63.8005 0.235252 124.776 0.44087 129.769 0.44087C134.763 0.44087 159.499 -0.170538 166.078 2.88717C171.341 5.33334 176.172 10.0222 177.93 12.0608C177.406 12.4685 176.673 13.7323 177.94 15.5263C179.206 17.3202 179.879 20.0791 180.058 21.2343C179.359 21.9138 177.961 23.436 177.963 24.0883C177.965 24.9037 173.235 25.1076 175.603 26.1269C177.498 26.9423 177.977 29.3207 177.98 30.4079C176.143 31.4272 171.628 33.5066 168.264 33.6696C164.901 33.8327 161.959 34.553 160.909 34.8928L160.913 36.5238C162.491 36.7956 165.331 37.4206 164.07 37.7468C162.494 38.1545 160.915 37.1352 159.602 37.7468C158.29 38.3584 156.453 39.5815 158.031 39.9893C158.517 40.3649 158.991 40.5523 159.416 40.6252C159.938 40.5276 160.502 40.4473 160.924 40.397C160.654 40.5644 160.099 40.7422 159.416 40.6252C158.531 40.7911 157.769 41.0071 158.035 41.2124C158.456 41.5386 160.139 42.0278 160.928 42.2317L162.246 43.4548H158.041C155.728 43.4548 156.204 44.678 156.732 45.2896C156.119 45.4255 154.525 45.6157 153.052 45.2896C151.211 44.8818 152.001 45.4934 148.848 45.6973C146.325 45.8604 132.608 45.7652 128.315 45.6973C128.665 45.4255 128.891 44.8818 126.999 44.8818C124.634 44.8818 124.371 44.8818 121.481 45.2896C118.591 45.6973 52.3574 44.8801 43.4214 44.8801C36.2725 44.8801 45.3573 43.8702 44.0432 43.8702C39.9274 44.5497 25.6713 45.868 19.5733 45.7049C11.9508 45.501 5.3746 43.4625 5.37405 43.2586C5.37361 43.0955 3.9688 41.9675 3.26646 41.4239C3.96825 41.7636 5.37128 42.2393 5.36906 41.4239C5.36685 40.6084 3.95865 38.2301 3.25483 37.1429L5.35189 35.1044Z" fill="#FDA3C4"/>
        <path d="M10.3772 46.7242C9.53611 46.7242 9.50329 47.5396 9.592 47.9473L7.88419 48.1512C7.05375 48.8307 5.55047 50.149 6.1808 49.9859C6.81114 49.8228 8.01893 49.3744 8.54402 49.1705C8.89372 48.8987 11.2752 48.3551 18.0035 48.3551C26.414 48.3551 25.6244 47.9473 26.4129 47.9473C27.2013 47.9473 11.4285 46.7242 10.3772 46.7242Z" fill="#FDA3C4"/>
      </svg>

      <p style={{fontSize: textSize}}>{text}</p>
    </div>
  );
}

export default PinkVectorText;