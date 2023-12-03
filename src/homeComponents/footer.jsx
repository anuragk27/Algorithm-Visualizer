import React, {Component} from 'react';
// import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                {/* <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/anuragk27" aria-label="Follow @anuragk27 on GitHub">Follow @anuragk27</GitHubButton></div>
                </div> */}

                <div class="footer-copyright text-center py-3">
                    <a href="https://github.com/anuragk27" style={{color: "#65b6f0"}}> Anurag kumar</a>
                </div>

            </footer>
        );
    }
}

export default Footer;