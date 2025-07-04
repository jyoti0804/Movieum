import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmEzNDllNTJkMWVlY2UyZDdmOWVmZDBjMWE3YjFkOCIsInN1YiI6IjY2NDg3YWI5YjcwZjk5MDAwNmYyM2FkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9lAhUH09yTh-vSjs8pCjnNR3r33gl7wPTHAZ-EIymOk'
      }
})

export default instance;