import './ContactsPage.css'
import BottomBar from '../../components/BottomBar.js'
import ShopInstagram from '../../components/ShopInstagram.js';
import BigTitle from '../../components/BigTitle.js';
import PinkVectorButton from '../../components/PinkVectorButton.js';
import PageDirectory from '../../components/PageDirectory.js';

function ContactsPage(props) {
	return  (
		<div className="contacts-page-container">
			<PageDirectory pages={[{page: "/", title: "Главная"}]} currentPage="Контакты"/>

			<div className="contacts-container">
				<div className="contacts-container-left">
					<div className="contacts-container-left-top">
						<BigTitle title="КОНТАКТЫ" titleFontSize="3.1vw" descrFontSize="1.5vw"/>

						<div className="text-container" onClick={() => window.open("https://yandex.ru/maps/2/saint-petersburg/?ll=30.314997%2C59.938784&z=11", "_blank")}>
							<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.726 15.16 16.63 9.6 20.8C9.4269 20.9298 9.21637 21 9 21C8.78363 21 8.5731 20.9298 8.4 20.8C2.84 16.63 0 12.726 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0ZM9 2C7.14348 2 5.36301 2.7375 4.05025 4.05025C2.7375 5.36301 2 7.14348 2 9C2 11.71 4.118 14.836 8.448 18.306L9 18.742L9.552 18.306C13.882 14.836 16 11.71 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 7C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21071 10.0391 7 9.53043 7 9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7Z" fill="#1F1F1F"/>
							</svg>
							<p>г.Киев,  ул. Нижний вал, 37</p>
						</div>

						<div className="text-container">
							<svg width="18" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.8125 0C1.27031 0 0 1.24208 0 2.75V19.25C0 20.7579 1.27031 22 2.8125 22H12.1875C13.7297 22 15 20.7579 15 19.25V2.75C15 1.24208 13.7297 0 12.1875 0H2.8125ZM2.8125 1.83333H12.1875C12.7078 1.83333 13.125 2.24125 13.125 2.75V19.25C13.125 19.7588 12.7078 20.1667 12.1875 20.1667H2.8125C2.29219 20.1667 1.875 19.7588 1.875 19.25V2.75C1.875 2.24125 2.29219 1.83333 2.8125 1.83333ZM7.5 17.4167C7.25136 17.4167 7.0129 17.5132 6.83709 17.6852C6.66127 17.8571 6.5625 18.0902 6.5625 18.3333C6.5625 18.5764 6.66127 18.8096 6.83709 18.9815C7.0129 19.1534 7.25136 19.25 7.5 19.25C7.74864 19.25 7.9871 19.1534 8.16291 18.9815C8.33873 18.8096 8.4375 18.5764 8.4375 18.3333C8.4375 18.0902 8.33873 17.8571 8.16291 17.6852C7.9871 17.5132 7.74864 17.4167 7.5 17.4167Z" fill="#1F1F1F"/>
							</svg>
							<a href="tel:380638433471">+38 063 843 34 71</a>
						</div>

						<div className="text-container">
							<svg width="18" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.1082 1.86192C14.8812 2.33978 14.7458 2.85593 14.7089 3.38366H3.28487C2.84092 3.38366 2.41516 3.56002 2.10124 3.87394C1.78732 4.18786 1.61096 4.61362 1.61096 5.05757V5.41792L10.437 10.7136L16.4303 7.118C16.9359 7.49169 17.5182 7.74825 18.1352 7.86913L10.8284 12.2536C10.7237 12.3163 10.6055 12.3529 10.4836 12.3603C10.3618 12.3677 10.24 12.3457 10.1284 12.2962L10.0457 12.2536L1.61096 7.19227V15.101C1.61096 15.6897 2.08818 16.1663 2.67618 16.1663H18.1979C18.4804 16.1663 18.7514 16.054 18.9511 15.8543C19.1509 15.6545 19.2631 15.3836 19.2631 15.101V7.93853C19.7909 7.90141 20.307 7.76577 20.7849 7.53861V15.101C20.7849 15.7871 20.5123 16.4451 20.0272 16.9303C19.542 17.4154 18.884 17.688 18.1979 17.688H2.67618C1.99007 17.688 1.33207 17.4154 0.846924 16.9303C0.361776 16.4451 0.0892222 15.7871 0.0892222 15.101L0.0886136 5.90122C0.0863476 5.86738 0.0863476 5.83342 0.0886136 5.79957L0.0892222 5.05757C0.0892222 3.29236 1.51966 1.86192 3.28487 1.86192H15.1082ZM18.9588 0.644531C19.766 0.644531 20.5401 0.965182 21.1108 1.53594C21.6816 2.10671 22.0023 2.88083 22.0023 3.68801C22.0023 4.49519 21.6816 5.26931 21.1108 5.84007C20.5401 6.41083 19.766 6.73148 18.9588 6.73148C18.1516 6.73148 17.3775 6.41083 16.8067 5.84007C16.236 5.26931 15.9153 4.49519 15.9153 3.68801C15.9153 2.88083 16.236 2.10671 16.8067 1.53594C17.3775 0.965182 18.1516 0.644531 18.9588 0.644531Z" fill="#1F1F1F"/>
							</svg>
							<a href="mailto:hello@www.booriva.com">hello@www.booriva.com</a>
						</div>

					</div>

					<div className='contacts-container-left-bottom'>
						<img src='https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/306b1f7e29765efcc98dee3a9b259fe632baff44'></img>
						<PinkVectorButton text="ПРОЛОЖИТЬ МАРШРУТ" width="60%"/>
					</div>
				</div>
				<img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/2bc9e024fe0016f1f601b3d3b8cd6cd8b43f824f"></img>
			</div>

			<ShopInstagram withHints={true}/>
			<BottomBar changeContent={props.changeContent}/>
		</div>
	);
}

export default ContactsPage;