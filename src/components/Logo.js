import { Text, Image } from "@chakra-ui/react";



export default function Logo({color}) {
    return (
        <div style={{ display: "flex" }}>
            <Image width={'50px'} height={'50px'} src={"/Logo.png"} />
        </div>
    )
}