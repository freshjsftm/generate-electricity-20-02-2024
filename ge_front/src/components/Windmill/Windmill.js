import { useEffect, useState } from 'react';
import cx from 'classnames';
import './Windmill.style.css';

function Windmill(props) {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (spin) {
      setTimeout(() => {
        props.stop();
        setSpin(false);
      }, 10000);
    } // eslint-disable-next-line
  }, [spin]);

  const setSpinner = () => {
    if (!spin) {
      props.spin();
      setSpin(true);
    }
  };

  const cn = cx('vanes', {
    spin,
  });

  return (
    <div className="windmill">
      <div className={cn} onClick={setSpinner}></div>
    </div>
  );
}

export default Windmill;
