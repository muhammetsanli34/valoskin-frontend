import "./index.css";
function CaseOpen() {
  const skins = [
    {
      name: "IŞIK MUHAFIZLARI OPERATOR",
      image: "/images/isik-muhafizlari-operator.png",
    },
    {
      name: "IŞIK MUHAFIZLARI ARES",
      image: "/images/isik-muhafizlari-ares.png",
    },
    {
      name: "ÖZEL HAREKAT SPECTRE",
      image: "/images/ozel-harekat-spectre.png",
    },
  ];

  const openCase = () => {
    const caseContainer = document.getElementById("case-container");
    if (!caseContainer) return;
    caseContainer.style.transition = "all 8s cubic-bezier(.08,.6,0,1)";
    caseContainer.style.marginLeft = `-15000px`;
    const winningItem = document.getElementById("skin-65");
    if (!winningItem) return;
    setTimeout(() => {
      winningItem.classList.add("winning-item");
    }, 8000);
  };

  return (
    <div
      className="
    flex flex-col justify-center items-center w-full overflow-scroll
    "
    >
      <div
        className="
        flex justify-center items-center w-1/2
        "
      >
        <img src="/images/valo-icon-1.png" alt="valo-logo" />
      </div>
      <div
        className="flex justify-center items-center bg-valo-dark-blue text-valo-white
      border-4 border-valo-dark-red rounded-lg p-5"
        id="case-container"
      >
        {[
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
          ...skins,
        ].map((skin, index) => {
          return (
            <div
              className="flex flex-col items-center
            hover:scale-110 transform hover:z-50
            "
              id={`skin-${index}`}
              style={{
                minWidth: "300px",
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={window.location.origin + skin.image}
                  alt={skin.name}
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <p>{skin.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="
          bg-valo-dark-blue text-valo-white
          border-4 border-valo-dark-red rounded-lg p-5
          hover:animate-pulse hover:cursor-pointer
          transition duration-500 ease-in-out
          hover:scale-110 transform hover:z-50
          w-64
          mt-2
          "
          onClick={() => openCase()}
        >
          AÇ
        </button>
      </div>
    </div>
  );
}

export default CaseOpen;
