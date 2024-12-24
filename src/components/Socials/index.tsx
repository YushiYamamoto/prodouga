import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="./company-info"
                        target="_self"
                        rel="noreferrer"
                    >
                        <p>会社案内</p>

                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="./legal-notice"
                        target="_self"
                        rel="noreferrer"
                    >
                        <p>特定商取引法に基づく表示</p>

                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="./privacy"
                        target="_self"
                        rel="noreferrer"
                    >
                        <p>プライバシーポリシー</p>

                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="./ir"
                        target="_self"
                        rel="noreferrer"
                    >
                        <p>電子公告</p>

                </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="./contact"
                        target="_self"
                        rel="noreferrer"
                    >
                        <p>お問い合わせ</p>

                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
