import React from "react";
function Hello(props) {
  //如果在一个组件中return一个null。则表示此组件是空的，什么都不会渲染

  //在组件中，必须返回一个合法的JSX虚拟DOM元素
  //props.name='zs'
  // console.log(props);
  //结论：不论是vue还是react，组件中的props永远都是只读的，不能被重新赋值

  return (
    <div>
      显示组件--- {props.name}--- {props.age}---{props.gender}
    </div>
  );
}

export default Hello;
// 显示组件调用方法
