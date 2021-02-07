import { useRouter } from 'next/router'
import React from "react";

const Page = ({content}) => {
    const router = useRouter()
    const { type, id } = router.query
    return (
        <div>
            <p>{type} => {id}</p>
            <p>{content}</p>
        </div>
    )
}

Page.getInitialProps = async () => ({
  content: `tresc ustawy ${Math.random()}`
});

export default Page;
