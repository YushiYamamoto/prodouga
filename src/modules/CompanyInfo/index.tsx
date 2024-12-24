import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const CompanyInfo: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
<div className ="company-info">
    <h2>会社概要</h2>
    <dl>
        <dt>会社名</dt>
        <dd>株式会社プロドウガ</dd>

        <dt>英語表記</dt>
        <dd>PRODUGA CORPORATION</dd>

        <dt>代表者名</dt>
        <dd>代表取締役 山本 勇志</dd>

        <dt>登録番号</dt>
        <dd>T8011001149693</dd>

        <dt>資本金</dt>
        <dd>990,000円</dd>

        <dt>決算期</dt>
        <dd>8月末日(年1回)</dd>

        <dt>創業</dt>
        <dd>2014年9月</dd>

        <dt>設立</dt>
        <dd>2022年9月</dd>
    </dl>
</div>

<div className ="address">
    <h2>北関東営業所</h2>
    <p>〒367-0061 埼玉県本庄市小島1-9-32-B111</p>
</div>

<div className ="address">
    <h2>本社</h2>
    <p>〒150-0001 東京都渋谷区神宮前6丁目23番4号桑野ビル2階</p>
</div>
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
