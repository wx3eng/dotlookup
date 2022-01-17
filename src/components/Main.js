import React, {Component} from 'react';
import { Row, Col } from 'antd';
import SatSetting1 from './SatSetting';

class Main extends Component {
    render() {
        return (
            <Row className='main'>
                <Col span={8} className="left-side">
                    <SatSetting1 />
                </Col>
                <Col span={16} className="right-side">
                    right
                </Col>
            </Row>
        );
    }
}

export default Main;
