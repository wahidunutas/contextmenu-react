import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { FiCopy, FiSave } from 'react-icons/fi';
import { AiOutlinePrinter, AiOutlineDelete, AiFillSetting } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';
import { BiPaste } from 'react-icons/bi';
import {IoMdArrowDropright} from 'react-icons/io';

function App() {
  const [ctx, setCtx] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleCtx = useCallback(
    (e) => {
      e.preventDefault();
      setCtx({ x: e.clientX, y: e.clientY });
      setShow(true);
    },
    [setCtx, setShow]
  )

  const hideCtx = useCallback(() => (show ? setShow(false) : null), [show])

  useEffect(() => {
    document.addEventListener('click', hideCtx);
    document.addEventListener('contextmenu', handleCtx);
    return () => {
      document.removeEventListener('click', hideCtx);
      document.removeEventListener('contextmenu', handleCtx);
    }
  },[ hideCtx, handleCtx ]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Costume Context Menu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        show &&
        <div className='context-menu' style={{top: ctx.y, left: ctx.x}}>
            <ul>
              <li>
                <a href="">
                  <span><FiCopy className='icon'/>Copy</span>
                  <span>Ctrl+C</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span><BiPaste className='icon'/>Paste</span>
                  <span>Ctrl+V</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span><MdRefresh className='icon'/>Refresh</span>
                  <span>Ctrl+R</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span><AiOutlineDelete className='icon'/>Delete</span>
                  <span>Delete</span>
                </a>
              </li>
              <hr></hr>
              <li>
                <a href="">
                  <span><FiSave className='icon'/>Save as</span>
                  <span>Ctrl+S</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span><AiOutlinePrinter className='icon'/>Print</span>
                  <span>Ctrl+P</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span><AiFillSetting className='icon'/>Settings</span>
                  <span><IoMdArrowDropright/></span>
                </a>
                <div className='dropdown-content'>
                  <a href="">
                    <span><AiOutlinePrinter className='icon'/>Dropdown 1</span>
                  </a>
                  <a href="">
                    <span><AiOutlinePrinter className='icon'/>Dropdown 2</span>
                  </a>
                  <a href="">
                    <span><AiOutlinePrinter className='icon'/>Dropdown 3</span>
                  </a>
                </div>
              </li>
          </ul>
        </div>
      }
    </div>
  );
}

export default App;
