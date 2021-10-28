import { FunctionComponent } from "react";
import { useStyle } from "./style";

export const Footer: FunctionComponent = () => {
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
        <div className={classes.footerSocials}>
          <p className={classes.footerSocialsLabel}></p>
          <ul className={classes.socialLinks}>
            <li className={classes.socialLink}>
              <a className={classes.socialNetwork} href="#">
                <div className={classes.network}>
                  <svg className={classes.iconNetwork}>
                    <use href="assets/icons/symbol-defs.svg#instagram"></use>
                  </svg>
                </div>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a className={classes.socialNetwork} href="">
                <svg className={classes.socialNetwork}>
                  <use href="assets/icons/symbol-defs.svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a className={classes.socialNetwork} href="">
                <svg className={classes.socialNetwork}>
                  <use href="assets/icons/symbol-defs.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li className={classes.socialLink}>
              <a className={classes.socialNetwork} href="">
                <svg className={classes.socialNetwork}>
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
