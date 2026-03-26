export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>亚斐亚 App</h1>
      <p style={{ fontSize: 18, marginBottom: 24 }}>
        亚斐亚公司内部培训与案例平台
      </p>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>当前定位</h2>
        <p>
          这是一个用于公司内部课程学习、案例沉淀、反思记录、导师观察与管理参考的内部系统。
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>第一阶段目标</h2>
        <ul>
          <li>课程中心</li>
          <li>案例中心</li>
          <li>学习路径</li>
          <li>反思记录</li>
          <li>导师反馈</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>系统状态</h2>
        <p>✅ 网站已成功上线，正在进入功能建设阶段。</p>
      </section>
    </main>
  );
}
