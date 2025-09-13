var btnVoltarTopo = document.querySelector(".btn-voltar-topo");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || documentElement.scrollTop > 200) {
    btnVoltarTopo.classList.add("visible");
  } else {
    btnVoltarTopo.classList.remove("visible");
  }
};

btnVoltarTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
