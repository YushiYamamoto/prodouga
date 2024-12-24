import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Ir: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Address"
                            boxAsLink={true}
                            href="./pdf/2022.pdf"
                            target="_blank"
                        >
                            第1期（2022年度）貸借対照表
                        </TextBox>
                        </FadeIn>
                </S.ContactBox>
                <S.ContactBox>
                <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Address"
                            boxAsLink={true}
                            href="./pdf/2023.pdf"
                            target="_blank"
                        >
                            第2期（2023年度）貸借対照表
                        </TextBox>
                        </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
