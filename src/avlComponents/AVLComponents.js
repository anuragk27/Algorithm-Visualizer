import '../css/AlgoScreen.css';
import '../css/App.css';
import { AVL } from '../algo';
import AnimationManager from '../anim/AnimationMain';
import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import Navbar from "./Navbar";

class AVLVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.canvasRef = React.createRef();
		this.animBarRef = React.createRef();

		this.state = {
			width: 0,
		};
		ReactGA.pageview('AVL');
	}

	componentDidMount() {
		this.animManag = new AnimationManager(this.canvasRef, this.animBarRef);

		this.currentAlg = new AVL(
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

AVLVisualizer.propTypes = {
	location: PropTypes.object,
};

export default AVLVisualizer;
