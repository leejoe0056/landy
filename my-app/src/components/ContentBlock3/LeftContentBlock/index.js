import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{"주요 기능"}</h6>
              <S.Content>{"Android/iOS 앱 동시개발"} <br/> <font size="2">{"Android와 iOS앱을 동시 개발로 모든 고객이 동일한 서비스를 이용할 수 있게 만듭니다."}</font></S.Content>
              <S.Content>{"푸시 알림 기능"}<br/> <font size="2">{"기본 패키징에 푸시 알림 기능 추가는 기본적으로 적용됩니다. 전체 고객에게 푸시 알림이 가능하고 특정 고객에게도 가능하게 만들어 드립니다."}</font></S.Content>
              <S.Content>{"소스 코드 제공"} <br/> <font size="2">{"개발 완료 후 모든 소스 코드를 제공해 드립니다."}</font></S.Content>
              <S.Content>{"앱 사용자 인터페이스"}<br/> <font size="2"> {"스플래시 스크린, 로딩스피너 뿐만 아니라 앱에서 사용되는 제스쳐 UI를 제공해 드립니다."}</font> </S.Content>
              <S.Content>{"Google 애널리스틱"} <br/> <font size="2">{"구글 애널리스틱(analytics)지원으로 다양한 통계를 제공해 드립니다."}</font></S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          
                          <S.MinPara>{t(item.content)}</S.MinPara>

                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);
