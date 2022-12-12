import React, {useEffect, useState} from 'react';
import { Col, Row } from 'antd';
function Favorites() {
        const [favorites , setFavorites] = useState([])
    const getFavorites = () => {
      let favorites =  [{title : localStorage.getItem("title") , year : localStorage.getItem("year") , url : localStorage.getItem("url")}]
        setFavorites(favorites);
    }

    useEffect(() => {
        getFavorites()
    }, [])
    return(
        <>
            <Row>
                {favorites.map((item) => {
                    return <>
                    <Col span={8}>
                        <div>{item.title}</div>
                        <div>{item.year}</div>
                        <div><img src={item.url} alt={"poster"}></img></div>
                    </Col>
                    </>
                })}



            </Row>
        </>
    )
}
export default Favorites;