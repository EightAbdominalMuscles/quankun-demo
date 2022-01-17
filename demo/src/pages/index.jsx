import React, { useState } from 'react';
import { useModel } from 'umi';

import CustomModal from '../../../common/template/CustomModal/index.jsx'
import styles from './index.less';

export default function IndexPage() {
  const { testProp1, globalState } = useModel('@@qiankunStateFromMaster') || {};
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <div>
      hellow
      <h1 className={styles.title}>
        <p>全局注入参数: {JSON.stringify(globalState)}</p>
        <p>props传递参数:  {testProp1}</p>
        <button onClick={() => setModalVisible(true)}>全局组件启动</button>
        <CustomModal
          title="全局组件"
          visible={modalVisible}
          okText={'确定'}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          width={400}
        >
          demo
        </CustomModal>
      </h1>
    </div>
  );
}
