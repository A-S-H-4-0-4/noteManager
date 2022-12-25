//  styleSheet
import AL from "../styles/components/addLinks.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const AddLinks = () => {
  return (<div className={AL.screen}>
    <div className={AL.box}>
      <div className={AL.head} style ={{marginTop:'10px'}}>
        <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', fontFamily: 'monospace' }}>A D D - L I N K </span>
      </div>
      <div className={AL.title} style ={{marginTop:'10px'}}>
        <TextField id="standard-basic" label="Add Tittle" variant="standard" style={{width: '300px'}}/>
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Type Or Paste Link Here"
        multiline
        rows={1}
        defaultValue="Type Or Paste Text Here"
        style={{ width: '500px', marginTop: '15px' }}
      />
      <div className={AL.btn} style={{ width:'500px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',marginTop:'20px',marginBottom:'5px'}}>
      <Button variant="outlined" label="Save" color="success"> Save</Button>
      <Button variant="outlined" color="error"> Close</Button>
    </div>
    </div>
  </div>)
}


export default AddLinks