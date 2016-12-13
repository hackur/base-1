import React, { PureComponent } from 'react';
import {render} from 'react-dom';

// import Core components from components/core
import {
  Badge, Block, Button, Checkbox, Container, DropDown, Input, Modal,
  Quantity, Radio, Slider, Range, Switch, Tab, Table, Tabs, Tag, Video, Text
} from 'components/core';

import Progress from 'components/charts/progress';
import Menu from 'components/navigation/menu';
import Pagination from 'components/navigation/pagination';

// country list for DropDown options example
import Countries from 'countries';

export default class Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  toggleModal() {
    let {showModal} = this.state;
    this.setState({
      showModal: !showModal
    });
  }

  render() {
    const {showModal} = this.state;

    return (
      <Container>
        <h3>Components</h3>
        <hr />
        <h5>Inputs</h5>
        <Tabs>
          <Tab label={'Buttons'}>
            <Block inline full>
              <Button>default</Button>
              <Button className={'active'}>active</Button>
              <Button disabled>disabled</Button>
              <Button className={'active'}>
                <i className='fa fa-play' /> Play
              </Button>
            </Block>
          </Tab>
          <Tab label={'Badge'}>
            <Block inline full>
              <Badge>1</Badge>
              <Badge round>1</Badge>
              <Badge border>1</Badge>
              <Badge round border>1</Badge>
            </Block>
          </Tab>
          <Tab label={'Input'}>
            <Block full>
              <Input placeholder={'Default input'} label={'test'}/>
              &nbsp;
              <Input type={'password'} placeholder={'Password'} />
              <br />
              <Input type={'email'} placeholder={'Email'} required />
              &nbsp;
              <Input placeholder={'Disabled'} disabled />
            </Block>
          </Tab>
          <Tab label={'Quantity'}>
            <Block inline full middle>
              <Quantity />
              <Quantity value={45} min={10} max={99} editable />
              <Quantity value={5} min={0} max={100} step={5} />
            </Block>
          </Tab>
          <Tab label={'Radio'}>
            <Block inline full middle>
              <Radio name='radio' label={'ok'} />
              <Radio name='radio' label={'bad'} />
            </Block>
          </Tab>
          <Tab label={'Checkbox'}>
            <Block inline full middle>
              <Checkbox name='radio' label={'checkbox'} />
            </Block>
          </Tab>
          <Tab label={'Switch'}>
            <Block inline full middle>
              <Switch onLabel={'ON'} offLabel={'OFF'} />
            </Block>
          </Tab>
          <Tab label={'Text'}>
            <Block full center inline card>
              <Text h1>H1</Text>
              &nbsp;
              <Text h2>H2</Text>
              &nbsp;
              <Text h3>H3</Text>
              &nbsp;
              <Text h4>H4</Text>
              &nbsp;
              <Text h5>H5</Text>
              &nbsp;
              <Text h6>H6</Text>
              &nbsp;
              <Text className='title'>Title</Text>
              &nbsp;
              <Text h6>
                React<Text type='sup'>sup</Text>
              </Text>
            </Block>
          </Tab>
          <Tab label={'Video'}>
            <Block full center inline card>
              <Video src={'http://www.w3schools.com/html/mov_bbb.mp4'} />
            </Block>
          </Tab>
        </Tabs>

        <h5>Other</h5>
        <Tabs componentUpdate>
          <Tab label={'Tags'}>
            <Tag label={'Default TAG'} />
            <Tag primary label={'Primary TAG'} />
            <Tag accent label={'Accent TAG'} />
          </Tab>
          <Tab label={'Table'}>
            <Table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Company name</th>
                  <th>Last</th>
                  <th>Change</th>
                  <th>Change %</th>
                  <th>High</th>
                  <th>Low</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>AGTK</th>
                  <th>Agritek Holdings Inc.</th>
                  <th>0.03</th>
                  <th>+0.00</th>
                  <th>+2.45</th>
                  <th>0.04</th>
                  <th>0.02</th>
                </tr>
                <tr>
                  <th>AKAM</th>
                  <th>Akamai Technologies Inc.</th>
                  <th>65.45</th>
                  <th>-0.77</th>
                  <th>-1.16</th>
                  <th>66.16</th>
                  <th>65.11</th>
                </tr>
                <tr>
                  <th>FB</th>
                  <th>Facebook Inc. Cl A</th>
                  <th>119.02</th>
                  <th>-1.78</th>
                  <th>-1.47</th>
                  <th>120.70</th>
                  <th>118.15</th>
                </tr>
                <tr>
                  <th>GDDY</th>
                  <th>GoDaddy Inc. Cl A</th>
                  <th>33.14</th>
                  <th>+0.70</th>
                  <th>+2.16</th>
                  <th>33.19</th>
                  <th>32.00</th>
                </tr>
                <tr>
                  <th>OPESY</th>
                  <th>Opera Software ASA ADR</th>
                  <th>12.34</th>
                  <th>-1.35</th>
                  <th>-9.86</th>
                  <th>12.34</th>
                  <th>11.95</th>
                </tr>

              </tbody>
            </Table>
          </Tab>
          <Tab label={'DropDown'}>
            <DropDown options={Countries} multiple style={{width: '200px'}}/>
            <DropDown disabled options={[
              {value: '1', label: 'Disabled'}
            ]} />
          </Tab>
          <Tab label={'Menu'}>
            <Menu>
              <li>Latest products</li>
              <Menu title={'Brands'}>
                <li>A.P.C.</li>
                <li>Acne Studios</li>
                <li>Adidas</li>
                <li>Alien Stripe</li>
                <li>AM</li>
                <li>Baxter of Calif</li>
                <li>Beamns Plus</li>
                <li>Black Leather</li>
                <li>Canada Goose</li>
                <li>Goldie Arrow</li>
                <li>Red Ladys</li>
                <li>Shoes of Plum</li>
                <li>Something new</li>
              </Menu>
              <li>Accessories</li>
              <Menu title={'Footwear'}>
                <li>Sneackers</li>
                <li>Shoes</li>
                <li>Boots</li>
                <li>Casual shoes</li>
                <li>Brogues</li>
                <li>Sandals</li>
              </Menu>
              <li style={{color: '#7DC855'}}>Sales</li>
            </Menu>
          </Tab>
          <Tab label={'Modal'} style={{width: '100%', justifyContent: 'center'}}>
            <Button onClick={this.toggleModal.bind(this)}>Show Modal</Button>
            <Modal
              title={'Header'}
              open={showModal}
              onClose={(modalState) => this.setState({showModal: modalState.open})}>
              Content of the modal
            </Modal>
          </Tab>
          <Tab label={'Slider'}>
            <Block inline full>
              <Slider value={10} max={80} success showCounter />
              <Slider value={20} max={80} info showCounter />
              <Slider value={30} max={80} warning showCounter />
              <Slider value={40} max={80} error showCounter />
              <Slider value={50} max={80} showCounter />
            </Block>
          </Tab>
          <Tab label={'Range'}>
            <Block inline full>
              <Range min={10} max={200} showCounter={true} onChange={(range) => console.log('range', range)} />
            </Block>
          </Tab>
          <Tab label={'Progress'}>
            <Block inline full middle>
              <Progress label={'default'} value={15} />
              &nbsp;
              <Progress label={'success'} value={15} success />
              &nbsp;
              <Progress label={'info'} value={30} info />
              &nbsp;
              <Progress label={'warning'} value={45} warning />
              &nbsp;
              <Progress label={'error'} value={60} error />
            </Block>
          </Tab>
          <Tab label={'Pagination'}>
            <Block middle>
              <Pagination />
              <Pagination current={2} primary />
              <Pagination current={3} accent />
            </Block>
            <Block middle>
              <Pagination large />
              <Pagination current={2} large primary />
              <Pagination current={3} large accent />
            </Block>
            <Block middle inline>
              Controls
              <br />
              <Pagination pages={10} large controls />
            </Block>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

render(<Demo/>, document.querySelector('.app'));