import React from 'react';

import {
  Autocomplete,
  Tabs,
  Tab,
  Section,
  Carousel,
  Textarea,
  Collapsible,
  CollapsibleItem,
  Container,
  DatePicker,
  Divider,
  Dropdown,
  Button,
  Footer,
  Icon,
  MediaBox,
  Modal,
  Navbar,
  NavItem,
  Pagination,
  Parallax,
  Preloader,
  ProgressBar,
  RadioGroup,
  Range,
  Row,
  SearchForm,
  Select,
  SideNav,
  SideNavItem,
  Slider,
  Slide,
  Caption,
  Spinner,
  Switch,
  Table,
  TextInput,
  TimePicker,
  Toast,
  UserView,
  Breadcrumb,
  Card,
  CardTitle,
  Checkbox,
  Chip,
  Col,
  Badge
} from 'react-materialize';

<>
  <Autocomplete
    options={{ data: { asd: '32' }, onAutocomplete: () => 32 }}
    s={3}
  />
  ;
  <Tabs
    className="hello"
    defaultValue="what"
    options={{
      duration: 32,
      onShow: () => {},
      swipeable: true,
      responsiveThreshold: 32
    }}
    onChange={() => {}}
  />
  <Tab idx="as" title="Hello" />
  <Section node="div" className="foo" id="bar">
    <p>hello</p>
  </Section>
  <Carousel
    images={['one.jpg']}
    options={{ numVisible: 32, onCycleTo: () => {} }}
    centerImages={true}
  />
  <Textarea disabled={false} value="hello">
    foo
  </Textarea>
  <Collapsible options={{ accordion: true }} />
  <CollapsibleItem href="http://" active={false} />
  <Container className="hello" />
  <DatePicker options={{ isRTL: false }} id="asd" />
  <Divider />
  <Dropdown
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onOpenStart: () => {},
      outDuration: 250
    }}
    trigger={<Button>Drop Me!</Button>}
  >
    <a href="#">one</a>
  </Dropdown>
  <Footer
    className="example"
    copyrights="&copy 2015 Copyright Text"
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 1
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 2
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 3
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Link 4
          </a>
        </li>
      </ul>
    }
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        More Links
      </a>
    }
  >
    <h1>Footer Content</h1>
  </Footer>
  <Icon className="asd" left small large>
    cloud
  </Icon>
  <MediaBox
    id="MediaBox_7"
    options={{
      inDuration: 275,
      onOpenEnd: () => {},
      outDuration: 200
    }}
  >
    <img
      alt=""
      src="https://materializecss.com/images/sample-1.jpg"
      width="650"
    />
  </MediaBox>
  <Modal
    actions={[<Button>Close</Button>]}
    bottomSheet={false}
    fixedFooter={false}
    header="Modal Header"
    id="Modal-0"
    open={false}
    options={{
      dismissible: true,
      endingTop: '10%',
      inDuration: 250,
      onOpenStart: () => {},
      opacity: 0.5,
      outDuration: 250,
      preventScrolling: true,
      startingTop: '4%'
    }}
    root={document.getElementById('root')}
    trigger={<Button>MODAL</Button>}
  >
    <p>Lorem ipsum dolor sit amet</p>
  </Modal>
  <Navbar
    alignLinks="right"
    brand={
      <a className="brand-logo" href="#">
        Logo
      </a>
    }
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: () => {},
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem>
  </Navbar>
  <Pagination
    activePage={3}
    items={5}
    leftBtn={<Icon>chevron_left</Icon>}
    rightBtn={<Icon>chevron_right</Icon>}
  />
  <Parallax
    image={<img alt="" src="http://materializecss.com/images/parallax1.jpg" />}
    options={{
      responsiveThreshold: 0
    }}
  />
  <Preloader active color="blue" flashing={false} size="big" />
  <ProgressBar progress={50} />
  <RadioGroup
    label="T-Shirt Size"
    name="size"
    options={[
      {
        label: 'XL',
        value: 'xl'
      },
      {
        label: 'L',
        value: 'l'
      },
      {
        label: 'M',
        value: 'm'
      }
    ]}
    value="xl"
  />
  <Range min="0" max="50" />
  <Row node="p" className="asd" />
  <SearchForm searchIcon={<p>asd</p>} closeIcon={<i>asd</i>} />
  <Select
    id="Select-9"
    label="Choose your option"
    multiple={false}
    options={{
      classes: '',
      dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: () => {},
        onCloseStart: () => {},
        onOpenEnd: () => {},
        onOpenStart: () => {},
        outDuration: 250
      }
    }}
    value="2"
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button>SIDE NAV DEMO</Button>}
  >
    <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'jdandturk@gmail.com',
        image: 'static/media/react-materialize-logo.824c6ea3.svg',
        name: 'John Doe'
      }}
      userView
    />
    <SideNavItem href="#!icon" icon="cloud">
      First Link With Icon
    </SideNavItem>
    <SideNavItem href="#!second">Second Link</SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>Subheader</SideNavItem>
    <SideNavItem icon={<Icon>foo</Icon>} href="#!third" waves>
      Third Link With Waves
    </SideNavItem>
  </SideNav>
  <Slider
    fullscreen={false}
    options={{
      duration: 500,
      height: 400,
      indicators: true,
      interval: 6000
    }}
  >
    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1" />}>
      <Caption placement="center">
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2" />}>
      <Caption placement="left">
        <h3>Left Aligned Caption</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3" />}>
      <Caption placement="right">
        <h3>Right Aligned Caption</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
    <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4" />}>
      <Caption placement="center">
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    </Slide>
  </Slider>
  <Spinner color="red" />
  <Switch onLabel="yes" offLabel="no" />
  <Table centered striped />
  <TextInput
    noLayout
    disabled
    placeholder="hello"
    id="hello"
    label="what"
    defaultValue="ok"
    value="asd"
    validate
    success="ok"
    error="wrong"
    inputClassName="red"
    type="gui"
    onChange={e => {
      e.preventDefault();
    }}
    password
    email
  >
    yes
  </TextInput>
  <TimePicker
    id="TimePicker-13"
    options={{
      autoClose: false,
      container: 'root',
      defaultTime: 'now',
      duration: 350,
      fromNow: 0,
      i18n: {
        cancel: 'Cancel',
        clear: 'Clear',
        done: 'Ok'
      },
      onCloseEnd: () => {},
      onCloseStart: () => {},
      onOpenEnd: () => {},
      onOpenStart: () => {},
      onSelect: () => {},
      showClearBtn: false,
      twelveHour: true,
      vibrate: true
    }}
  />
  <Toast className="asdasd" options={{ displayLength: 3 }}>
    <p>hello</p>
  </Toast>
  <UserView background="asd" image="asd" />
  <Breadcrumb cols={6} />
  <Button
    node="div"
    tooltipOptions={{
      position: 'bottom',
      enterDelay: 2000,
      html: 'Can take regular text or HTML strings.'
    }}
  >
    click
  </Button>
  <Card
    closeIcon={<Icon>close</Icon>}
    header={
      <CardTitle
        image="https://materializecss.com/images/sample-1.jpg"
        reveal
        waves="light"
      />
    }
    reveal={
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    }
    revealIcon={<Icon>more_vert</Icon>}
    title="Card Title"
  >
    <p>
      <a href="#">This is a link</a>
    </p>
  </Card>
  <Checkbox value="yes" label="what" checked />
  <Chip
    close={false}
    closeIcon={<Icon className="close">close</Icon>}
    options={{
      data: [{
        tag: 'Apple',
      }],
      autocompleteOptions: {
        data: {
          Apple: null,
          Google: null,
          Microsoft: null
        },
        limit: Infinity,
        minLength: 1,
        onAutocomplete: function noRefCheck() {}
      }
    }}
  />
  <Col offset="23">a</Col>
  <Badge newIcon={<i>a</i>} caption="Hello" />
</>;
