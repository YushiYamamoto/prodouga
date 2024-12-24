import { type FC, useState } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";
import "./styles.css";

interface FormData {
  "entry.1500656964": string;
  "entry.1895736526": string;
  "entry.358411611": string;
  "entry.457505346": string;
  "entry.1283236954": string;
  "entry.1244985334": string;
  "entry.1211000841": string;
}

export const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    "entry.1500656964": "",
    "entry.1895736526": "",
    "entry.358411611": "",
    "entry.457505346": "",
    "entry.1283236954": "",
    "entry.1244985334": "",
    "entry.1211000841": "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formBody = new URLSearchParams(formData as any).toString();
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfizxR5cE_XKskQZY45WZk6LGQVrTc_meZw3zMbeMrifxArAA/formResponse", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
    .then(() => {
      // フォームが正常に送信された後にサンクスページにリダイレクト
      window.location.href = "/thank-you"; // ここにサンクスページのURLを指定
    })
    .catch(error => {
      console.error("フォームの送信エラー:", error);
      alert("フォームの送信中にエラーが発生しました。");
    });
  };

  return (
    <S.ContactStyled>
      <S.ContainerStyled>
        <FadeIn delay={0.1}>
          <TextBox variant="background-text" bgText="Contact Form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="entry.1500656964" className="required">氏名:</label>
              <input
                type="text"
                id="entry.1500656964"
                name="entry.1500656964"
                value={formData["entry.1500656964"]}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="entry.1895736526" className="required">メールアドレス:</label>
              <input
                type="email"
                id="entry.1895736526"
                name="entry.1895736526"
                value={formData["entry.1895736526"]}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="entry.358411611">電話番号:</label>
              <input
                type="tel"
                id="entry.358411611"
                name="entry.358411611"
                value={formData["entry.358411611"]}
                onChange={handleInputChange}
              />

              <label htmlFor="entry.457505346">会社名:</label>
              <input
                type="text"
                id="entry.457505346"
                name="entry.457505346"
                value={formData["entry.457505346"]}
                onChange={handleInputChange}
              />

              <label htmlFor="entry.1283236954">部署名:</label>
              <input
                type="text"
                id="entry.1283236954"
                name="entry.1283236954"
                value={formData["entry.1283236954"]}
                onChange={handleInputChange}
              />

              <label htmlFor="entry.1244985334" className="required">問い合わせの種類:</label>
              <select
                id="entry.1244985334"
                name="entry.1244985334"
                value={formData["entry.1244985334"]}
                onChange={handleInputChange}
                required
              >
                <option value="">選択してください</option>
                <option value="プロモーション">プロモーション</option>
                <option value="動画制作">動画制作</option>
                <option value="デザイン">デザイン</option>
                <option value="マーケティング">マーケティング</option>
                <option value="AI活用">AI活用</option>
                <option value="技術サポート">技術サポート</option>
                <option value="パートナーシップ">パートナーシップ</option>
                <option value="一般情報">一般情報</option>
                <option value="フィードバック">フィードバック</option>
                <option value="その他">その他</option>
              </select>

              <label htmlFor="entry.1211000841" className ="required">問い合わせ内容:</label>
              <textarea
                id="entry.1211000841"
                name="entry.1211000841"
                value={formData["entry.1211000841"]}
                onChange={handleInputChange}
                rows={5}
                required
              ></textarea>
              
              <button type="submit">送信</button>
            </form>
          </TextBox>
        </FadeIn>
      </S.ContainerStyled>
    </S.ContactStyled>
  );
}
