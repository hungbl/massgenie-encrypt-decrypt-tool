import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as edActions from '../actions/action-ed';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {click: 0};
    this.runED = this.runED.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.changeTextBox = this.changeTextBox.bind(this);
  }

  runED(){
    const {mode, mgKey, input, output} = this.props.reducerED.toJS();

    this.setState({click: 1});
    if(mgKey == null || mgKey == undefined || mgKey == ''
      || input == null || input == undefined || input == ''){
      return;
    }

    this.props.submit({mode: mode, key: mgKey, input: input});
  }

  changeMode(){
    this.props.changeMode();
  }

  changeKey(e){
    this.props.changeKey(e.target.value);
  }

  changeTextBox(method, fieldName, e){
    const newTextBox = {
        fieldName: fieldName,
        value: e.target.value
    }
    method(newTextBox);
  }

  render(){
    const {mode, mgKey, input, output} = this.props.reducerED.toJS();
    const {click} = this.state
    return(
      <div>
        <div className="mgTool">
          <div className="mgContent">
          {
            mode == 1
              ? <button className="btn btn-lg mgSpan mgBtn btn-success">Encrypt</button>
              : <button className="btn btn-lg mgSpan mgBtn btn-secondary" onClick={this.changeMode}>Encrypt</button>
          }
          {
            mode == 2
              ? <button className="btn btn-lg mgSpan mgBtn btn-success">Decrypt</button>
              : <button className="btn btn-lg mgSpan mgBtn btn-secondary" onClick={this.changeMode}>Decrypt</button>
          }
          </div>
        </div>
        <div className="mgToolBody">
          <div className="container-fluid innerBodyDiv">
            <div className="row-fluid center">
              <div className="width80 mainContent">
                <div className="form-group">
                  <label>Massgenie Key:</label>
                  <input className="form-control" type="text" placeholder="Enter your secret key here" 
                        value={mgKey} 
                        onChange={this.changeTextBox.bind(this, this.props.changeTextBox, 'mgKey')} />
                  {
                    click == 1 && (mgKey == null || mgKey == undefined || mgKey == '')
                    ? <label className="message-validate">We need this one. Please fill it!</label>
                    : null
                  }
                </div>
                <div className="form-group">
                  <label>Input:</label>
                  <textarea className="form-control mgTextArea" type="text" placeholder="Enter your string here" 
                        value={input} 
                        onChange={this.changeTextBox.bind(this, this.props.changeTextBox, 'input')}/>
                  {
                    click == 1 && (input == null || input == undefined || input == '')
                    ? <label className="message-validate">Without this we can not return you result. Please fill it!</label>
                    : null
                  }
                </div>
                <div className="form-group right">
                  <button className="btn btn-sm mgFormBtn btn-success" onClick={this.runED}>Run</button>
                </div>
                <div className="form-group">
                  <label>Result:</label>
                  <textarea className="form-control mgTextArea" type="text" readOnly="true" value={output}/>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

function mapStateToProps (state){
  const {reducerED} = state;
  return {reducerED};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(edActions, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
