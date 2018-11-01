import Vue from 'vue'
import { Row, Col, Badge, BadgeGroup, Button, Cell, CellGroup, Collapse, CollapseItem, Icon, List, Loading, NavBar, NoticeBar, Popup, Stepper, Step, Steps, Tab, Tabs, Tabbar, TabbarItem, Tag, Waterfall, Checkbox, CheckboxGroup, Field, NumberKeyboard, RadioGroup, Radio, Search, Switch, Uploader, Actionsheet, DatetimePicker, Dialog, Picker, PullRefresh, Toast, CellSwipe, SwitchCell, AddressEdit, AddressList, SubmitBar, Sku } from 'vant'
let comArr = [Row, Col, Badge, BadgeGroup, Button, Cell, CellGroup, Collapse, CollapseItem, Icon, List, Loading, NavBar, NoticeBar, Popup, Stepper, Step, Steps, Tab, Tabs, Tabbar, TabbarItem, Tag, Waterfall, Checkbox, CheckboxGroup, Field, NumberKeyboard, RadioGroup, Radio, Search, Switch, Uploader, Actionsheet, DatetimePicker, Dialog, Picker, PullRefresh, Toast, CellSwipe, SwitchCell, AddressEdit, AddressList, SubmitBar,Sku]
for (let i of comArr) {
  Vue.use(i)
}

