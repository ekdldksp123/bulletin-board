import React, { useEffect, useState } from "react";
import { useModal, usePost, useToggle } from "../../libs/store.module";
import { HeaderButtonProps } from "../../types/header";
import { Posts } from "../../types/post";
import { ContainerCenter } from "../layout/ContainerGroup";
import Header from "../layout/Header";
import CardList from "../molecules/Cards";

/**
 * 
 * @author vinchaekim
 * @param Posts { list: Post[]} 
 * @since 2022.07.06
 * 
 */

const Posts: React.FC<Posts> = (props) => {

    return (
        <ContainerCenter>
            <CardList {...props}/>            
        </ContainerCenter>
    )
}

export default Posts;