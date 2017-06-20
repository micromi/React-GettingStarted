// 定义不同组件之间共用的功能，共享的代码
const MixinLog = {
  // 也有生命周期
  componentDidMount() {
    console.log("MixinLog componentDidMount");
  },
  log() {
    console.log("共享的功能(mixin)...");
  }
};

export default MixinLog;
