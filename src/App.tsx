import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// memo: Reactコンポーネントは大文字始まり（パスカルケース）のルール
export const App = (): JSX.Element => {
  const [num, setNum] = useState(0); //useState（関数コンポーネント）は配列の分割代入を使って定義する
  //onclickイベントはjavascript関数を実行する形で記載
  const onClickCountUp = () => {
    setNum(num + 1); //この形でsetNumすると、numはイベント発火時の数値のまま変わらないので、num+1を何度やっても+1しかされない
    setNum(num + 1);
    setNum((prev) => {
      //この形でsetnumすると、引数(prev)に常に最新の値を入れてくれるので、上でnum+1されていることを考慮して、そこからさらに+1してくれる
      return prev + 1;
    });
  };
  //cssはオブジェクトで記載 インラインスタイル 実際はcssライブラリを使用したりする
  const contentStyleA = {
    color: "blue",
    fontsize: "20px",
  };

  return (
    <>
      <h1 style={contentStyleA}>こんにちは</h1>
      <ColorfulMessage color="green" message="お元気ですか？" />
      <ColorfulMessage color="red" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
