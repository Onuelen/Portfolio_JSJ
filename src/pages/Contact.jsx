import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 8vh 10vw;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  border:1px solid #f00;

  @media (min-width: 1920px) {
    padding: 10vh 12vw;
  }

  @media (max-width: 768px) {
    padding: 6vh 6vw;
    gap: 6vh;
  }
`;

const Title = styled.div`
  font-size: 4vw;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  font-size: 1rem;
  gap: 1.5rem;
  margin-bottom:10vh;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7b00;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    email: "",
  });

  const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbzL3e4MO0YAKjiz1efGTboqH7yf6mroYM_eMs7Yj3qZPUFmgn5vQSbLDKm1xHd9qy4xpg/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(googleWebAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        alert("전송완료!");
        setFormData({ name: "", text: "", email: "" });
      } else {
        alert("전송에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <Container id="contact">
      <Title>Contact</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="기업명"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="text"
          type="text"
          placeholder="내용을 입력해주세요."
          value={formData.text}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="회신 받으실 이메일 주소를 입력해주세요."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit" value="전송" />
      </FormWrapper>
    </Container>
  );
};

export default Contact;
