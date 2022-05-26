import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아오도록 설정하고 


classNames('one', 'two');
classNames('one', { two: true });// = 'one two'
classNames('one', { two: false }); // = 'one'
classNames('one', ['two', 'three']); // ='one two three'



const CSSModule = () => {

    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};



export default CSSModule;
