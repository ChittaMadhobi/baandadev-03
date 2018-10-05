//import alertModal from './AlertModal';
// import confirmModal from './ConfirmModal';
// import deleteModal from './DeleteModal';
// import promptModal from './PromptModal';
//import alertModalRcc from './AlertModalRCC';
import alertModalRcc from './displays/entrance/StartHereModal';
import carouselMan from './displays/nook/CarouselManual';
import socialMessage from './displays/nook/SocialCircleMessage';
import socialMirror from './displays/nook/SCMirrorModal';
import financialMirror from './displays/nook/FinanceMirrorModal';

// const modalTypes = {
//   alertModal,
//   confirmModal,
//   deleteModal,
//   promptModal,
//   alertModalRcc
// };

const modalTypes = {
  alertModalRcc,
  carouselMan,
  socialMessage,
  socialMirror,
  financialMirror
};

export default modalTypes;
