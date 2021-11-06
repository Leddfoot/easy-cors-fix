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
  ///use this input above to  manipulate the query below
  console.log('input: ', input);
  console.log('here we go')
  fetch('http://localhost:3000/nodehttp?city=holmen&id=135').then((response)=> {
    response.json().then((data)=> {
      console.log('data is',data)
    })
  })
}


  const form = document.getElementById('main-form')
  form.addEventListener('submit', testFunction)


