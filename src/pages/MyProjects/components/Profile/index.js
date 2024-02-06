import { useState } from 'react'
import Modal from '../../../../components/Modal'
import SuccessModal from '../../../../components/Modal/components/SuccessModal'
import './styles.css'

const Profile = ({userInfo}) => {

const [openModal, setOpenModal] = useState(false)
const [openSuccessModal, setOpenSuccessModal] = useState(false)

const openModalFunction = () => {
    setOpenModal(true)
}

const closeModalFunction = () => {
    setOpenModal(false)
}

const openSuccessModalFunction = () => {
    setOpenSuccessModal(true)
    setOpenModal(false)
}

const closeSuccessModalFunction = () => {
    setOpenSuccessModal(false)
}

    return (
        <div className='profile'>
            <img className='icon-profile' src={userInfo.imagem} alt="ícone do perfil"/>
            <div>
            <h1 className='profile-title'>{userInfo.first_name} {userInfo.last_name}</h1>
            <h2 className='profile-subtitle'>Brasil</h2>
            <button className='button' onClick={() => openModalFunction()} >Adicionar Projeto</button>
            </div>
            {openModal === true ? <Modal closeModal={closeModalFunction} openSuccessModal={openSuccessModalFunction} userInfo={userInfo}/> : null}
            {openSuccessModal === true ? <SuccessModal closeModal={closeSuccessModalFunction} /> : null}
        </div>
    )
}

export default Profile;