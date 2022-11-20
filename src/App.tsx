import React, { ChangeEvent, useState } from 'react';
import './styles/App.css';
import QrScanner from 'qr-scanner';

function App() {
  const [data, setData] = useState('');
  const scanFromImageHandler = async (evnet: ChangeEvent<HTMLInputElement>) => {
    const file = evnet?.target?.files?.[0];
    if (file === undefined) {
      return;
    }

    const result = await QrScanner.scanImage(file, { returnDetailedScanResult: true });
    setData(result?.data);
    // .then(result => console.log(result))
    // .catch(e => console.log({ data: e || 'No QR code found.' }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>QR 코드 리더기</p>
        <label htmlFor="image-uploader">사진 추가하기</label>
        <input id="image-uploader" type="file" accept="image/*" onChange={scanFromImageHandler} />
        <div>
          결과
          <div>{data}</div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
