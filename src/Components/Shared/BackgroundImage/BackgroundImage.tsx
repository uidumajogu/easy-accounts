import { FC } from "react";
import "./BackgroundImage.scss";


type Props = {
    imageURL: string,
    backgroundPosition?: string,
    height?: string,
    width?: string,
}


const BackgroundImage: FC<Props> = ({ imageURL, backgroundPosition, height,width  }) =>
{
    let style:{[key: string]: string} = { backgroundImage: `url(${imageURL})` }
    if (backgroundPosition) style.backgroundPosition = backgroundPosition;  
    if (height) style.height = height;  
    if (width) style.width = width; 
    

  return (
      <div className="background-image-wrapper" style={style}>     
    </div>
  );
};

export default BackgroundImage;
