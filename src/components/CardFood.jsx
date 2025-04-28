import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useParams } from "react-router-dom";
import Navigation from "../features/name-food/Navbar";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import Footer from "./Footer";

export default function CardFood() {

    const {country} = useParams()
    const [values, setValues] = useState([])
    const [search, setSearch] = useState("")
    const list = values.map(val => ({
        title: val.strMeal,
        img: val.strMealThumb,
      }))
    const [filterFoods, setFilterFoods] = useState(list)

    const fetchData = async () => {
          try {
            const response = await axiosInstance.get(`/filter.php?a=${country}`)
            setValues(response.data.meals)
            const filterFood = list.filter(list => 
                list.title.includes(search)
              )
              setFilterFoods(filterFood)
            console.log(search)
            } catch (error) {
              console.log(error)
            }
        }


    useEffect(() => {
        fetchData()
    }, [search, values])

return (
    <>
    <div className="flex flex-col min-h-screen">

    <Navigation setSearch={setSearch} />
    <div className="flex justify-center text-center bg-black text-white">
      <h3 className="">{name}</h3>
    </div>
        {values && values.length > 0 ? (
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-4">
      {filterFoods.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
    ) : (
        <p>No meals found.</p>
    )}
    <Footer />
    </div>

    </>
)

}