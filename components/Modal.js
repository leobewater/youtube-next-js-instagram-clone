import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>I'm a modal</h1>
      {open && (<p>Modal is opened</p>)}
    </div>
  );
}

export default Modal;
