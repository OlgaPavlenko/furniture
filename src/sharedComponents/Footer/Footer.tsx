import { FunctionComponent } from "react";
import { useStyle } from "./style";

export const Header: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <ul className={classes.footerContact}>
          <li className={classes.footerContactItem}>
            <a className={classes.footerColor}></a>
          </li>
          <li className="footerContactItem">
            <a href="mailto:info@devstudio.com" className={classes.footerColor}>
              info@teststudio.com
            </a>
          </li>
          <li className="footer-contact-item">
            <a href="tel:+380971111111" className={classes.footerColor}>
              +380971111111
            </a>
          </li>
        </ul>
        <div className={footerSocials}>
          <p className={footerSocialsLabel}></p>
          <ul className={socialLinks}>
            <li className={socialLink}>
              <a className={socialNetwork} href="#">
                <div className={network}>
                  <svg className={iconNetwork}>
                    <use href="assets/icons/symbol-defs.svg#instagram"></use>
                  </svg>
                </div>
              </a>
            </li>
            <li className={socialLink}>
              <a className={socialNetwork} href="">
                <svg className={socialNetwork}>
                  <use href="assets/icons/symbol-defs.svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li className={socialLink}>
              <a className={socialNetwork} href="">
                <svg className={socialNetwork}>
                  <use href="assets/icons/symbol-defs.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li className={socialLink}>
              <a className={socialNetwork} href="">
                <svg className={socialNetwork}>
                  <use href="assets/icons/symbol-defs.svg#linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyrite"></p>
    </footer>
  );
};
