import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.runED = this.runED.bind(this);
  }

  runED(){
    alert('run ED');
  }

  render(){
    const {mode, mgKey, input, output} = this.props.reducerED.toJS();
    return(
      <div>
        <div className="mgTool">
          <div className="mgContent">
            <button className="btn btn-lg mgSpan mgBtn">Encrypt</button>
            <button className="btn btn-lg mgSpan mgBtn">Decrypt</button>
          </div>
        </div>
        <div className="mgToolBody">
          <div className="container-fluid innerBodyDiv">
            <div className="row-fluid center">
              <div className="width80 mainContent">
                <div className="form-group">
                  <label>Massgenie Key:</label>
                  <input className="form-control" type="text" placeholder="enter your secret key here" value={mgKey}/>
                </div>
                <div className="form-group">
                  <label>Input Text:</label>
                  <textarea className="form-control mgTextArea" type="text" placeholder="enter your string here" value={input}/>
                </div>
                <div className="form-group right">
                  <button className="btn btn-sm mgFormBtn" onClick={this.runED}>Run</button>
                </div>
                <div className="form-group">
                  <label>Result Text:</label>
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
  return bindActionCreators({}, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
