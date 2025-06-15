export const ColorfulMessage = (props) => {
  //export const ColorfulMessage = ({color, message}) => { //これでもOK　props受け取る時点で分割代入しちゃう
  // 分割代入
  const { color, message } = props;
  const contentStyle = {
    color: color, //同名なのでcolorのみでも設定可能（省略できる）
    fontsize: "20px",
  };

  return (
    <>
      <p style={contentStyle}>{message}</p>
    </>
  );
};
