import axios from 'axios'
import {useEffect, useState} from "react";

export default function HomePage() {
    const [title , setTitle] = useState("")
    const [year , setYear ] = useState([])
    const [selectedYear , setSelectedYear] = useState(0)
    const [data , setData] = useState({})

    useEffect(() => {
        getYears();
    },[])
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const getRecords = () => {
        axios.get(`http://www.omdbapi.com/?t=${title}&y=${selectedYear}&apikey=${process.env.REACT_APP_KEY}`).then((res) => {
            return setData(res.data)
        })
    }
    const getYears = () => {
        let years = [];
        let startYear = 1899;
        let year = new Date().getFullYear();
        while (startYear <= year ) {
        years.push(startYear++)
        }
        return setYear(years)
    }
    const yearOnChange = (e) => {
        setSelectedYear(e.target.value)
    }
  return (
    <div>
        <input type={"text"} onChange={handleChange}></input>
        <select onChange={yearOnChange}>
            {year.map((item) => {
              return  <option key={item}>{item}</option>
            })}
        </select>
        <button onClick={() => getRecords()}> Get Records</button>
        <div>{data.Title}</div>
        <div>{data.Year}</div>
        <div>{data.Poster ? <img src={data.Poster} alt={"poster"}></img> : null}</div>

    </div>
  )
}
