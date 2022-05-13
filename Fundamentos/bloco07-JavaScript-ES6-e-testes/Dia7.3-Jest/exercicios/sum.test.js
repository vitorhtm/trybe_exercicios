const sum = require("./sum");

describe("Testando a função sum", () => {
  it("testa se 4 +5 é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("testando se 0 + 0 é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("testa se a função sum lança um erro quando for (4, '5')", () => {
    expect(() => sum(4, "5")).toThrow();
  });
  it("testa se a mensagem de erro é 'parameters must be numbers'", () => {
    expect(() => sum().toThrowError(new Error("parameters must be numbers")));
  });
});
