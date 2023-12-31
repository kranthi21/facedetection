import './FaceDetection.css';


const FaceDetection = ({imgUrl, box}) => {
    return(
        <div className='w-100 center'>
            <div className='w-100 absolute mt2'>
                <img id="output_image" className='imgresult w-50 ' src={imgUrl} alt =''/>
                <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}

export default FaceDetection;