//  styles
import AT from '../styles/components/addText.module.css';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const AddText = () => {
  return (<div className={AT.screen}>
    <div className={AT.box}>
      <div className={AT.head}>
        <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', fontFamily: 'monospace' }}>A D D - T E X T </span>
      </div>
      <div className={AT.title}>
        <TextField id="standard-basic" label="Add Tittle" variant="standard" style={{width: '400px'}}/>
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Type Or Paste Text Here"
        multiline
        rows={18}
        defaultValue="Type Or Paste Text Here"
        style={{ width: '500px', marginTop: '10px' }}
      />
      <div className={AT.btn} style={{ width:'500px',display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
      <Button variant="outlined" label="Save" color="success"> Save</Button>
      <Button variant="outlined" color="error"> Close</Button>
    </div>
    </div>
  </div>)
}
export default AddText 