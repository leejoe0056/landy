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
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  
                        <Col key={id} span={11}>
                          <SvgIcon src={"notes.svg"} width="60px" height="60px" />
                          <S.MinTitle>{"기본 패키징"}</S.MinTitle>
                          <S.MinTitle>{"Android or iOS앱 택1"}</S.MinTitle>
                          <S.MinTitle>{"300,000원"}</S.MinTitle>
                          <S.MinPara>{"- 무제한 푸시알림 기능"}</S.MinPara>
                          <S.MinPara>{"- Android 백버튼 종료 기능"}</S.MinPara>
                          <S.MinPara>{"- 스플래시스 스크린 기능"}</S.MinPara>
                          <S.MinPara>{"- 로딩스피너 기능"}</S.MinPara>
                          <S.MinPara>{"- 소스 제공"}</S.MinPara>
                          <S.MinPara>{"앱 아이콘 적용 등 기능 추가 별도 문의"}</S.MinPara>
                          <S.MinPara>{"스토어 등록시 추가비용 7만원"}</S.MinPara>

                        </Col>
                
                        <Col key={id} span={11}>
                          <SvgIcon src={"notes.svg"} width="60px" height="60px" />
                          <S.MinTitle>{"멀티 패키징"}</S.MinTitle>
                          <S.MinTitle>{"Android, iOS앱"}</S.MinTitle>
                          <S.MinTitle>{"600,000원"}</S.MinTitle>
                          <S.MinPara>{"- 무제한 푸시알림 기능"}</S.MinPara>
                          <S.MinPara>{"- Android 백버튼 종료 기능"}</S.MinPara>
                          <S.MinPara>{"- 스플래시스 스크린 기능"}</S.MinPara>
                          <S.MinPara>{"- 로딩스피너 기능"}</S.MinPara>
                          <S.MinPara>{"- 소스 제공"}</S.MinPara>
                          <S.MinPara>{"앱 아이콘 적용 등 기능 추가 별도 문의"}</S.MinPara>
                          <S.MinPara>{"스토어 등록시 추가비용 7만원"}</S.MinPara>

                        </Col>
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
