import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Array','Searching','Sorting','Stack','Queue','Prime Number'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;