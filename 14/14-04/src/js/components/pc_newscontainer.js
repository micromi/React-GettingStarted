import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
	render() {

    const settings = {
        dots: true, // 是否显示面板指示点
        infinite: true,
        speed: 500,
        slidesToShow: 1, // 同一时间容器显示几张图片
        autoplay: true // 是否自动切换
    };

		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_2.jpg"/></div>
                  <div><img src="./src/images/carousel_3.jpg"/></div>
                  <div><img src="./src/images/carousel_4.jpg"/></div>
                </Carousel>
              </div>
            </div>
          </Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
