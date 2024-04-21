import './Cards.css'


interface Description {
  title: string;
  description: string;
  image: string;
  audio:string;
  text: string;
}


export default function Cards({title, image, description,audio,text}:Description){

  
    return(
     
      <div className='area'>
       
      <div  className = 'cards'> 
      <div className='thefront'>
      <ul>
        <li>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>           
      </li>
      </ul>
      </div>
      <div className='theback'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      </div>

      
         <audio controls>
      <source src={audio} type="audio/mpeg" />
    </audio>
      </div>
      
  
    )
}