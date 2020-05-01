import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <span><b>Created by Kevin Lu</b></span>
                <ul>
                    <li>
                        <div>
                            <i className="fab fa-github-square"></i>
                        </div>
                        <a href="http://github.com/kluaa">
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <div>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <a href="https://www.linkedin.com/in/kevin-lu-96b294191/">
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <div>
                            <i className="fab fa-angellist"></i>
                        </div>
                        <a href="https://angel.co/u/kevin-lu-45">
                            <span>AngelList</span>
                        </a>
                    </li>
                    <li>
                        <div>
                            <i className="fas fa-folder"></i>
                        </div>
                        <a href="http://kevinlu.netlify.com">
                            <span>Portfolio</span>
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;