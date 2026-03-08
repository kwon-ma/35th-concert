import React from 'react';
import posterImg from '../assets/poster1.jpg'; 

function Home() {
  return (
    <div style={{ padding: '0', color: '#fff', textAlign: 'center' }}>
      <img 
        src={posterImg} 
        alt="SNUPia 제35회 정기연주회 포스터" 
        style={{ width: '100%', display: 'block' }} 
      />

      <div style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#C5A880', fontWeight: '300', marginBottom: '25px', letterSpacing: '2px' }}>
          초대의 글
        </h2>
        
        <p style={{ color: '#ddd', lineHeight: '1.8', fontSize: '15px', wordBreak: 'keep-all' }}>
          따뜻한 봄바람이 불어오는 3월,<br />
          SNUPia 제35회 정기연주회에<br />
          여러분을 초대합니다.
          <br /><br />
          (회장단 인사말 텍스트)
        </p>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#111', borderRadius: '10px' }}>
          <p style={{ margin: '0 0 10px 0', color: '#C5A880', fontWeight: 'bold' }}>2026. 03. 14 (토) 16:00</p>
          <p style={{ margin: '0', color: '#aaa', fontSize: '14px' }}>서울대학교 음악대학 예술관(49동) 콘서트홀</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
