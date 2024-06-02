import './Boorivagirls.css'
import React from 'react';
import PageDirectory from '../../components/PageDirectory';
import BigTitle from '../../components/BigTitle';
import BottomBar from '../../components/BottomBar';
import PinkVectorButton from '../../components/PinkVectorButton';

const Boorivagirls = () => {
  return (
    <div className="boorivagirls-container">
      <div className="boorivagirls-container-body">
        <PageDirectory pages={[{page: "/", title: "Главная"}]} currentPage="BOORIVAGIRLS"/>

        <div className="boorivagirls-body">
          <div className="boorivagirls-body-left">
            <div className="boorivagirls-body-left-header">
              <BigTitle title="BOORIVAGIRLS" description="#BOORIVAGIRLS" titleFontSize="3.5vw" descrFontSize="2vw"/>
              <text>Мы обожаем встречать booriva на улице.<br></br>Так как всех не встретишь, отмечай нас в соц.сетях<br></br>и мы внутри взорвемся и закричим УРА!</text>
            </div>

            <div className="boorivagirls-body-left-container">
              <div className="boorivagirls-body-left-lefthalf">
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/8ced88916d0bacf0cdc41f49b72267e4c1ed563d"></img>
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/6d527e1c70039eaf78671bce3e0212013782a77e"></img>
                <text>Ставь тэг <span style={{color: "var(--accent2)"}}>#boorivagirls</span> чтобы быть<br></br>в нашей тусовке.</text>
                <PinkVectorButton text="INSTAGRAM" width="60%"/>
              </div>

              <div className="boorivagirls-body-left-righthalf">
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/68d5ae38da54f898eeadb91499013b67a3903be3"></img>
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/54d4c9e7dc3884545be4c951d9ca3744ad6062a7"></img>
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/73f53f59f429045be2aab9f4f040ee12939307f8"></img>
              </div>
            </div>
          </div>

          <div className="boorivagirls-body-right">
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/68d5ae38da54f898eeadb91499013b67a3903be3"></img>
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/54d4c9e7dc3884545be4c951d9ca3744ad6062a7"></img>
                <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/73f53f59f429045be2aab9f4f040ee12939307f8"></img>
              </div>
        </div>
      </div>
      
      <BottomBar/>
    </div>
  );
}

export default Boorivagirls;