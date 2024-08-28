import '../css/AlgoScreen.css';
import '../css/App.css';
import AnimationManager from '../anim/AnimationMain';
import { DFS } from '../algo'; 
import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import Navbar from "./Navbar";

class DFSVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.canvasRef = React.createRef();
		this.animBarRef = React.createRef();

		this.state = {
			examplesEnabled: false,
			width: 0,
		};
		ReactGA.pageview('DFS');
	}

	componentDidMount() {
		this.animManag = new AnimationManager(this.canvasRef, this.animBarRef);

		this.currentAlg = new DFS(
			this.animManag,
			this.canvasRef.current.width,
			this.canvasRef.current.height,
		);
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	updateDimensions = () => {
		this.animManag.changeSize(document.body.clientWidth);
	};

	render() {
		return (
			<div className="VisualizationMainPage">
				<div id="container">
					<div id="mainContent">
					<Navbar />
						<div id="algoControlSection">
							<table id="AlgorithmSpecificControls"></table>
						</div>
						<div id="generalAnimationControlSection">
							<table id="GeneralAnimationControls" ref={this.animBarRef}></table>
						</div>
						<div className="viewport">
							<canvas
								id="canvas"
								width={this.state.width}
								height="505"
								ref={this.canvasRef}
							></canvas>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DFSVisualizer.propTypes = {
	location: PropTypes.object,
};

export default DFSVisualizer;