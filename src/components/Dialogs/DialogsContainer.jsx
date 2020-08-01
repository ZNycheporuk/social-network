import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {sendMessage} from '../../redux/dialog-reducer';
import {getDialogs, getMessages} from '../../redux/dialog-selectors';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {sendMessage}),
)(Dialogs);

