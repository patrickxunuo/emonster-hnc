export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        locale: {
          default: "zh-CN", //默认语言 zh-CN，如果 baseSeparator 设置为 _，则默认为 zh_CN
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true, // 是否启用antd的<LocaleProvider />
          baseSeparator: "-", // 语言默认分割符 -
        },
      },
    ],
  ],
};
