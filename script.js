document.getElementById("merendaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const refeicao = document.getElementById("refeicao").value;

  const conteudo = `📅 Data: ${data}\n👤 Aluno: ${nome}\n🍲 Refeição: ${refeicao}\n--------------------------\n`;

  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `merenda_${nome}_${data}.txt`;
  link.click();

  document.getElementById("merendaForm").reset();
});
