import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/AuthRedirect';
import {sendMessage} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {sendMessage}),
)(Dialogs);

