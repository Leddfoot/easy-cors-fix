console.log('hello from app')
console.log('This is where your app is running from:', location.href)

const testFunction =(e)=>{
  e.preventDefault()
  console.log('submitted')
  fetch('http://localhost:3000/returnSomeJSON').then((response)=> {
    response.json().then((data)=> {
      console.log(data)
    })
  })
}

const sendFetchViaServer =(e)=>{ 
  e.preventDefault() 
  const input = document.getElementById('main-input').value 
  const url = `http://localhost:3000/nodehttp?searchingFor=${input}` ///use this input above to manipulate the query below 
  console.log('input: ', input); 
  console.log('here we go') 
  fetch(url).then((response)=> { response.json().then((data)=> { console.log('data is',data) }) }) }