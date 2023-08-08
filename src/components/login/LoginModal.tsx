import CommonModal from '@components/common/modal/CommonModal';

const LoginModal = ({ isOpen, onClose }: any) => {
	return <CommonModal isOpen={isOpen} onClose={onClose}>
		<CommonModal.Header>
			로그인
		</CommonModal.Header>
		<CommonModal.Body>
			로그인 버튼
		</CommonModal.Body>
		<CommonModal.Footer/>
	</CommonModal>
}

export default LoginModal;
