
// Axios Global (Making header golobal)
axios.defaults.headers.common['X-type'] = 'some token';
axios.defaults.headers.common['y-type'] = 'some token';

let site = 'https://jsonplaceholder.typicode.com/todos'

// GET REQUEST
function getTodos() {
  // axios({
  //   method : 'get',
  //   url : "https://jsonplaceholder.typicode.com/todos",
  //   // params send limited data
  //   params : {
  //     _limit : 5
  //   }
  // // }).then(res => console.log(res))
  // }).then(res => showOutput(res))
  //   .catch(err => console.log(err))

  // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
  //   params : {_limit : 5}
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// POST REQUEST
function addTodo() {
  // axios({
  //   method : 'post',
  //   url : 'https://jsonplaceholder.typicode.com/todos',
  //   date : {
  //     tittle : 'New Todo',
  //     complete : false
  //   }
  // }).then(res => showOutput(res))
  // .catch(err => console.log(err))

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    tittle: 'New Todo',
    complete: false
  }).then(res => showOutput(res))
    .catch(err => console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  // console.log('PUT/PATCH Request');

  // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
  //   tittle: 'Update todo',
  //   complete : true
  // }).then(res => showOutput(res)).catch(err => console.log(err))

  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    title: 'Update todo',
    complete: true
  }).then(res => showOutput(res))
    .catch(err => console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/3')
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
    axios.get('https://jsonplaceholder.typicode.com/comments')
  ])
    // .then(res => {
    //   console.log(res[0]);
    //   console.log(res[1])
    //   showOutput(res[0])
    // })

    // using Spread
    .then(axios.spread((todo, comment) => {
      showOutput(comment)
    }))
    .catch(err => console.log(err))
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers : {
      'Content-Type' : 'application/JSON',
      Authorization : "SomeToken"
    }
  };


  axios.post('https://jsonplaceholder.typicode.com/todos', 
  {
    tittle: 'New Todo',
    complete: false
  },
  config
  ).then(res => showOutput(res))
    .catch(err => console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
  const options = {
    method : 'post',
    url : 'https://jsonplaceholder.typicode.com/todos',
    data : {
      title : 'Hello World'
    },
    transformResponse : axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })

  }
  axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  axios
  .get('https://jsonplaceholder.typicode.com/todosw',{
    // ValidateStatus : function(status){
    //   return status < 500; //reject only if status is greater than or equal to 500
    // }
  })
  .then(res => showOutput(res))
  .catch(err => {
    if(err.response){
      // Server response with a status other than 200 range
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }

    if(err.response.status === 404){
      alert("Some thing wrong")
    }
    else if(err.request){
      // request was made but no response
      console.error(err.response);
    }else{
      console.error(err.message);

    }
  })

}

// CANCEL TOKEN
function cancelToken() {
  // console.log('Cancel Token');
  const source = axios.CancelToken.source()

  axios
  .get(site,{
    cancelToken : source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if(axios.isCancel(thrown)){
      console.log('Request Canceles',thrown)
    }
  });

  if(true){
    source.cancel("Request Canceled")
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use((config) => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)

  return config;
}, error => {
  return new Promise.reject(error);
})

// AXIOS INSTANCES

const axiosInstances = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com"
});

// axiosInstances.get('/comments').then(res => showOutput(res))

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
