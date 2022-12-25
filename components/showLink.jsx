// styles
import SL from "../styles/components/showLink.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ShowLink = () => {
  var title = "Show Text";
  var link = "https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp"
  
  return (
    <div className={SL.box}>
      <div className={SL.head} style = {{heigth:'50px',width:'95%',display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
        <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', fontFamily: 'monospace' }}>{title.toUpperCase(title)}</span> 
        <div style={{width:'15%',display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
        <EditIcon className={SL.editIcon}/>
        <DeleteIcon className={SL.deleteIcon}/>
        </div>
      </div>
      <div className={SL.cBox}>
      <a href={link} style={{color: 'blue', fontSize: '18px'}}>{link} </a>
      </div>
      
    </div>)

}



export default ShowLink;