import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@heroui/react";
import { axiosInstance } from "../lib/axios";
import { useEffect, useState } from "react";
import { CA, CN, EG, ES, FR, GB, GR, HR, IE, IN, IT, JM, JP, KE, MA, MX, MY, NL, PH, PL, PT, RU, TH, TN, TR, UA, US, UY, VN } from "country-flag-icons/react/1x1";
import { Link } from "react-router-dom";

export default function CountryFood() {

    const [values, setValues] = useState({
      america: "",
      british: "",
      canadian: "",
      chinese: "",
      croatian: "",
      dutch: "",
      egypt: "",
      filipino: "",
      french: "",
      greek: "",
      india: "",
      ireland: "",
      italy: "",
      jamaica: "",
      japan: "",
      kenya: "",
      malaysian: "",
      mexico: "",
      moroccan: "",
      polish: "",
      portuguese: "",
      russian: "",
      spanish: "",
      thai: "",
      tunisian: "",
      turkish: "",
      ukrainian: "",
      uruguayan: "",
      vietnamese: ""
    })

    const fetchData = async () => {
        const response = await axiosInstance.get("/list.php?a=list")
        setValues({
          america: response.data.meals[0],
          british: response.data.meals[1],
          canadian: response.data.meals[2],
          chinese: response.data.meals[3],
          croatian: response.data.meals[4],
          dutch: response.data.meals[5],
          egypt: response.data.meals[6],
          filipino: response.data.meals[7],
          french: response.data.meals[8],
          greek: response.data.meals[9],
          india: response.data.meals[10],
          ireland: response.data.meals[11],
          italy: response.data.meals[12],
          jamaica: response.data.meals[13],
          japan: response.data.meals[14],
          kenya: response.data.meals[15],
          malaysian: response.data.meals[16],
          mexico: response.data.meals[17],
          moroccan: response.data.meals[18],
          polish: response.data.meals[19],
          portuguese: response.data.meals[20],
          russian: response.data.meals[21],
          spanish: response.data.meals[22],
          thai: response.data.meals[23],
          tunisian: response.data.meals[24],
          turkish: response.data.meals[25],
          ukrainian: response.data.meals[26],
          uruguayan: response.data.meals[27],
          vietnamese: response.data.meals[28]
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className=" p-2 gap-2 text-sm">
    {/* // United State */}
    <Link to={`/filter-area/${values.america.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <US title="American" height={20} width={20} />
        <h1>america</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // British */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.british.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <GB title="Britania" height={20} width={20} />
        <h1>British</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Canadian */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.canadian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <CA title="Canada" height={20} width={20} />
        <h1>Canada</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Chinese */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.chinese.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <CN title="Chinese" height={20} width={20} />
        <h1>Chinese</h1>
      </CardHeader>
    </Card>
    </Link>
    
    {/* // Croatine */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.croatian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <HR title="Croatine" height={20} width={20} />
        <h1>Croatine</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Dutch */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.dutch.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <NL title="Dutch" height={20} width={20} />
        <h1>Dutch</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Egypt */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.egypt.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <EG title="Egyptian" height={20} width={20} />
        <h1>Egypt</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Filipino */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.filipino.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <PH title="PH" height={20} width={20} />
        <h1>Filiphine</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // French */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.french.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <FR title="Frence" height={20} width={20} />
        <h1>France</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Greek */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.greek.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <GR title="Greek" height={20} width={20} />
        <h1>Greek</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // India */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.india.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <IN title="Indian" height={20} width={20} />
        <h1>Indian</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Ireland */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.ireland.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <IE title="Irish" height={20} width={20} />
        <h1>Irish</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Italy */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.italy.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <IT title="Italian" height={20} width={20} />
        <h1>Italy</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Jamaica */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.jamaica.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <JM title="Jamaica" height={20} width={20} />
        <h1>Jamaica</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Japan */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.japan.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <JP title="Japanese" height={20} width={20} />
        <h1>Japanese</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Kenya */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.kenya.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <KE title="Kenyan" height={20} width={20} />
        <h1>Kenya</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Malaysian */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.malaysian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <MY title="Malaysian" height={20} width={20} />
        <h1>Malaysia</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Mexico */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.mexico.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <MX title="Mexican" height={20} width={20} />
        <h1>Mexico</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Moroccan */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.moroccan.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <MA title="Moroccan" height={20} width={20} />
        <h1>Morocco</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Polish */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.polish.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <PL title="Polish" height={20} width={20} />
        <h1>Polish</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Portuguese */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.portuguese.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <PT title="Portuguese" height={20} width={20} />
        <h1>Portuguese</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Russian */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.russian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <RU title="Russian" height={20} width={20} />
        <h1>Russian</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Spanish */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.spanish.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <ES title="Spanish" height={20} width={20} />
        <h1>Spain</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Thai */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.thai.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <TH title="Thai" height={20} width={20} />
        <h1>Thailand</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Tunisian */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.tunisian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <TN title="Tunisian" height={20} width={20} />
        <h1>Tunisia</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Turkish */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.turkish.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <TR title="Turkish" height={20} width={20} />
        <h1>Turkey</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Ukrainian */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.ukrainian.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <UA title="Ukrainian" height={20} width={20} />
        <h1>Ukraine</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Uruguayan */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.uruguayan.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <UY title="Uruguayan" height={20} width={20} />
        <h1>Uruguay</h1>
      </CardHeader>
    </Card>
    </Link>

    {/* // Vietnamese */}
    <Link className="w-[200px] h-[200px]" to={`/filter-area/${values.vietnamese.strArea}`}>
    <Card className="max-w-[150px]">
      <CardHeader className="flex gap-3">
        <VN title="Vietnamese" height={20} width={20} />
        <h1>Vietnam</h1>
      </CardHeader>
    </Card>
    </Link>
    </div>
  );
}