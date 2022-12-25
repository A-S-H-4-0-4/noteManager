import Button from '@mui/material/Button';
const c2 = '/images/c2.jpg'

const ShowImage = () => {

return (
<div style={{height: '30%',width: '15%',background:'black',display:'flex',flexDirection:'column',alignItems: 'center'}}>
<img src={c2} style={{height: '85%',width:'100%',objectFit:'cover'}}/>
<div style={{display:'flex', justifyContent: 'space-between',marginTop:'2%',width:'95%'}}>
<Button variant="outlined" color="success" style={{width:'35%',height:'30px'}}> preview</Button>
<Button variant="outlined" color="error" style={{width:'35%',height:'30px'}}> Delete</Button>
</div>
</div>
)
}


export default ShowImage