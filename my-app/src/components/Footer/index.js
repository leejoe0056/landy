import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{"문의하기"}</S.Language>
                <S.Large to="/">{"언제든 연락주세요"}</S.Large>
                <S.Para>
                  "{"사소한 문의도 좋습니다. 연락 주시면 친절히 상담해 드리겠습니다"}"
                </S.Para>
                <a href="mailto:l.qqbadze@gmail.com">
                  <S.Chat><font size="4">{"상 담 하 기"}</font></S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{"정책"}</S.Title>
                <S.Large to="/" left="true">
                  {"개인정보 처리방침"}
                </S.Large>
                <S.Large left="true" to="/">
                  {"서비스 이용약관"}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
               
                <S.Language>{"주소"}</S.Language>
                <S.Para>서울 영등포구 대림동 851-100</S.Para>
                <S.Para>하나세인스톤</S.Para>
              
              </Col>
              
            </Row>
          </Container>
        </S.Footer>
        
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
