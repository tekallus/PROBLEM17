import { useState, useEffect } from "react";

// Sekmede (document.title = ile) butona kaç kez tıklandığını gösterelim
export default function Counter() {
  const [count, setCount] = useState(0);

  //useEffect fonksiyonu her render sonrasinda calisir
  useEffect(() => {
    document.title = `Tiklama Sayisi:${count}`; //her tiklamada baslik guncellenecek
    console.log("Rendering Sonrası:", document.title);
  }, [count]); // [count] bağımlılık dizisi count değeri değiştiğinde useEffect'in çalışmasını sağlar. gereksiz tekrarlamalar önlenmiş olur.

  function updateCount() {
    setCount((c) => c + 1);
  }

  console.log("Rendering:", document.title);

  return (
    <div className="bg-blue-500/50 h-screen grid place-items-center">
      <div className="text-orange-500 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-8">
          Tıklama Sayısı: {count}
        </h1>
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          onClick={updateCount}
        >
          +1
        </button>
      </div>
    </div>
  );
}
