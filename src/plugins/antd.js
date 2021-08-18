import 'ant-design-vue/dist/antd.css';
import {
  // Affix,
  // Anchor,
  // AutoComplete,
  Alert,
  // Avatar,
  // BackTop,
  // Badge,
  Breadcrumb,
  Button,
  // Calendar,
  // Card,
  // Collapse,
  // Carousel,
  // Cascader,
  Checkbox,
  // Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  // Icon,
  Input,
  InputNumber,
  Layout,
  // List,
  // LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  // notification,
  // Pagination,
  Popconfirm,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  // Row,
  Select,
  Slider,
  // Spin,
  // Statistic,
  // Steps,
  // Switch,
  Table,
  // Transfer,
  Tree,
  TreeSelect,
  // Tabs,
  // Tag,
  // TimePicker,
  // Timeline,
  Tooltip,
  // Upload,
  // version,
  Drawer,
  // Skeleton,
  // Comment,
  // Image,
  // ConfigProvider,
  // Empty,
  // Result,
  // Descriptions,
  // PageHeader,
  Space
} from 'ant-design-vue'
Select.props.placeholder.default = '请选择'
export default function addAntd (app) {
  app
    // .use(Affix)
    // .use(Anchor)
    // .use(AutoComplete)
    .use(Alert)
    // .use(Avatar)
    // .use(BackTop)
    // .use(Badge)
    .use(Breadcrumb)
    .use(Button)
    // .use(Calendar)
    // .use(Card)
    // .use(Collapse)
    // .use(Carousel)
    // .use(Cascader)
    .use(Checkbox)
    // .use(Col)
    .use(DatePicker)
    .use(Divider)
    .use(Dropdown)
    .use(Form)
    // .use(Icon)
    .use(Input)
    .use(InputNumber)
    .use(Layout)
    // .use(List)
    // .use(LocaleProvider)
    .use(Menu)
    // .use(Mentions)
    .use(Modal)
    // .use(notification)
    // .use(Pagination)
    .use(Popconfirm)
    // .use(Popover)
    // .use(Progress)
    // .use(Radio)
    // .use(Rate)
    // .use(Row)
    .use(Select)
    .use(Slider)
    // .use(Spin)
    // .use(Statistic)
    // .use(Steps)
    // .use(Switch)
    .use(Table)
  // .use(Transfer)
    .use(Tree)
    .use(TreeSelect)
  // .use(Tabs)
  // .use(Tag)
  // .use(TimePicker)
  // .use(Timeline)
    .use(Tooltip)
  // .use(Upload)
  // .use(version)
    .use(Drawer)
  // .use(Skeleton)
  // .use(Comment)
  // .use(Image)
  // .use(ConfigProvider)
  // .use(Empty)
  // .use(Result)
  // .use(Descriptions)
  // .use(PageHeader)
    .use(Space)
}
