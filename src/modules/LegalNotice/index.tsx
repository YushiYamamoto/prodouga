import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const LegalNotice: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                <FadeIn delay={0.1}>
<div className ="info-section">
    <h2>販売業者</h2>
    <p>株式会社プロドウガ</p>
</div>

<div className ="info-section">
    <h2>代表取締役</h2>
    <p>山本　勇志</p>
</div>

<div className ="info-section">
    <h2>所在地</h2>
    <p>東京都渋谷区神宮前6丁目23番4号桑野ビル2階</p>
</div>

<div className ="info-section">
    <h2>ホームページ</h2>
    <p><a href="https://www.prodouga.com/">https://www.prodouga.com/</a></p>
</div>

<div className ="info-section">
    <h2>メールアドレス</h2>
    <p><a href="mailto:mail@prodouga.com">mail@prodouga.com</a></p>
</div>

<div className ="info-section">
    <h2>注文方法</h2>
    <p>ホームページ、電子メール</p>
</div>

<div className ="info-section">
    <h2>お支払方法</h2>
    <p>銀行振込</p>
    <p>GMOあおぞらネット銀行（0310） 法人営業部（101）</p>
    <p>普通口座 1464659 カ）プロドウガ</p>
</div>

<div className ="info-section">
    <h2>商品代金以外の必要料金</h2>
    <p>銀行振込の場合、振込手数料、消費税</p>
</div>

<div className ="info-section">
    <h2>お支払期限</h2>
    <p>納品完了後の翌月末日</p>
</div>

<div className ="info-section">
    <h2>納品形態</h2>
    <p>各種デザイン物の納品は以下の方法より選択:</p>
    <ul>
        <li>指定のサーバーに直接アップロード</li>
        <li>メディアに保存の上、郵送</li>
        <li>デザイン物を圧縮し、添付メールにて送付</li>
    </ul>
</div>

<div className ="info-section">
    <h2>返品について</h2>
    <p>商品の性質上、制作過程中盤以降の返品や料金お支払い後の返品はお受けできません</p>
</div>

<div className ="info-section">
    <h2>免責事項</h2>
    <p>ページ上に誤字脱字などの不具合ございましたら、お早めにご連絡ください。瑕疵担保期間内は無料にて修正いたします。ただし仕様上の問題など、場合によっては修正に費用が発生しますのであらかじめご了承ください。</p>
    <p>本サービスの利用は、お客様の責任においてご利用いただきます。</p>
    <p>本サービスを利用して発生したいかなる問題も弊社は一切責任を負うものではありません。また、本サービスを利用して得られた効果や品質を保証する物ではありません。</p>
</div>

                </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
