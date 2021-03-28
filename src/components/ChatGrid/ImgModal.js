import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import sampleA from './sampleImgs/sampleA.jpg';
import sampleB from './sampleImgs/sampleB.jpg';
import sampleC from './sampleImgs/sampleC.jpg';

function ImgModal(props) {
  const time = new Date()
  
  const [open, setOpen] = React.useState(false)
  const [imgSrc, setSrc] = React.useState(sampleA)

  const checkOk = () => {
    setOpen(false)

    const img_utterance = {
      type: false,
      time: time.toLocaleTimeString(),
      img: true,
      src: imgSrc,
    }

    props.conv_chatAdd(img_utterance)
    props.conv_changeTurn()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button type='submit' size='big' style={{width:'12%', paddingLeft:'4%', fontSize:'2vh'}}>Add</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <div onClick={() => setSrc(sampleA)}><Image style={{width: '20vh', height: 'auto'}} src={sampleA}/></div>
        <div onClick={() => setSrc(sampleB)}><Image style={{width: '20vh', height: 'auto', marginLeft:'1vw', marginRight:'1vw'}} src={sampleB}/></div>
        <div onClick={() => setSrc(sampleC)}><Image style={{width: '20vh', height: 'auto', marginRight:'1vw'}} src={sampleC}/></div>
        {/* <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image-square.png' wrapped /> */}
        <Modal.Description>
          <p>{imgSrc}</p>
          <p>이미지를 업로드하시겠습니까?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={checkOk} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ImgModal
