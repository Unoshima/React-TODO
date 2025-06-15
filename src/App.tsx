import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// memo: Reactコンポーネントは大文字始まり（パスカルケース）のルール
export const App = (): JSX.Element => {
  // stateが変わるとAppコンポーネントが再評価される
  console.log("Appコンポーネントが評価された");
  const [num, setNum] = useState(0); //useState（関数コンポーネント）は配列の分割代入を使って定義する
  const [isShowText, setIsShowText] = useState(true);

  //onclickイベントはjavascript関数を実行する形で記載
  const onClickCountUp = () => {
    setNum((prev) => {
      //この形でsetnumすると、引数(prev)に常に最新の値を入れてくれるので、上でnum+1されていることを考慮して、そこからさらに+1してくれる
      return prev + 1;
    });
  };
  const onClickToggle = () => {
    setIsShowText(!isShowText);
  };

  //cssはオブジェクトで記載 インラインスタイル 実際はcssライブラリを使用したりする
  const contentStyleA = {
    color: "blue",
    fontsize: "20px",
  };

  // useEffectを使用して
  // 第一引数：関数、第二引数：配列
  // 第二引数について
  //   空配列：最初のレンダリング時のみ実行
  //   値を入れた場合：その値に変更があった場合に実行。今回はカウントアップでnumが変更された場合のみ変更
  useEffect(() => {
    console.log("useEffect");
    // useEffect外でこの処理を書くと無限レンダリングになってしまう
    if (num % 3 === 0) {
      isShowText || setIsShowText(true);
    } else {
      isShowText && setIsShowText(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={contentStyleA}>こんにちは</h1>
      <ColorfulMessage color="green" message="お元気ですか？" />
      <ColorfulMessage color="red" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>文字表示切替</button>
      {isShowText && <p>隠し文字です</p>}
    </>
  );
};
