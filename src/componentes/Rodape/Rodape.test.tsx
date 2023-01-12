import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Rodape } from ".";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

jest.mock("../../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("quando nao houver participantes suficientes", () => {
  const participants: string[] = ["ana", "joaoa"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participants);
  });

  test("a brincadeira nao pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("quando houver participantes suficientes", () => {
  const participants: string[] = ["ana", "joaoa", "mais"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participants);
  });

  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
  });
});
