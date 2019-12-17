import requestObj from './';

// 下载deapp
export const downloadApp = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/download' }, { data: config }));
  return data;
}

// 初始化deapp
export const startDeapp = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/init/' + config.name }, { data: config }));
  return data;
}

// 安装deapp
export const installDeapp = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/install/' + config.name }, { data: config }));
  return data;
}

// store列表查询
export const getAppList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/queryAppStore' }, { data: config }));
  return data;
}

// myStore列表查询
export const getMyAppList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/installList' }, { data: config }));
  return data;
}

// 查询单个deapp配置项
export const getDeappConfig = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/config/query/' + config.name }, { data: config}));
  return data;
}

// 提交deapp配置
export const postDeappConfig = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/dapp/config/' + config.name }, { data: config }));
  return data;
}

// 卸载deApp
export const uninstallApp = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/uninstall/' + config.name }, { data: config }));
  return data;
}

// BD配置查询
export const BDOptionInfo = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/drs/bd/query/' + config.bdCode }, { data: config }));
  return data;
}

// Policy信息查询
export const getPolicyList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/drs/queryAllPolicy' }, { data: config }));
  return data;
}

// Domain信息查询
export const getDomainList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/drs/queryAllDomain' }, { data: config }));
  return data;
}

// Permission信息查询
export const getPermissionList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/drs/queryPermissionList' }, { data: config }));
  return data;
}

// 查询drs配置
export const getSysConfig = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/dapp/querySysConfig' }, { data: config }));
  return data;
}

// 修改drs配置
export const modifySysConfig = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/dapp/sysConfig' }, { data: config }));
  return data;
}

// 提交BD配置
export const submitBDConfig = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/bd/submit' }, { data: config }));
  return data;
}

// 查询合约
export const getContractList = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'GET', url: '/drs/queryContract' }, { data: config }));
  return data;
}

// 查询合约内方法
export const getContractParam = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/drs/queryMethodParam' }, { data: config }));
  return data;
}

// 获取交易信息
export const getBDConfigHistory = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/drs/queryTxs' }, { data: config }));
  return data;
}

// 获取签名原值
export const getSignValue = async config => {
  const { data } = await requestObj.request(Object.assign({ method: 'POST', url: '/bd/getSignValue' }, { data: config }));
  return data;
}
