import React from "react";
import { useSelector } from "react-redux";
import Toast from "./index";

import { Wrapper, Container } from "./container.styles";

export default function ToastContainer() {
  const toastList = useSelector((state) => state.toast.list);

  return (
    <Wrapper>
      <Container>
        {toastList.map((t) => (
          <Toast
            key={t.uuid}
            uuid={t.uuid}
            type={t.type}
            message={t.message}
            duration={t.duration}
          />
        ))}
      </Container>
    </Wrapper>
  );
}
