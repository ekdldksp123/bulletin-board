import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { usePost } from "../../libs/store.module";
import { AddPost, Post } from "../../types/post";
import { Input, TagBox, TagInput, TagItem, TextArea } from "../atom/InputGroup";

const Form = styled.form`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PostForm:React.FC = () => {

    const { post, setPost } = usePost()

    const [tagItem, setTagItem] = useState<string>('')
    const [tagList, setTagList] = useState<string[]>(post.tags ? post.tags : [])
    const [disabled, setDisabled] = useState<boolean>(false)

    const onChangeHandler = (e:any) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        } as Post)
    }

    const onKeyDownHandler = (e:any) => {
        // Space bar (keyCode = 0) 와 태그 리스트가 3개 미만일때만 태그 추가 가능
        if (e.target.value.length !== 0 && e.charCode === 32 && tagList.length < 3) {
            addTagItem()
        }
    }
    const addTagItem = () => {
        setTagList([...tagList, tagItem])
        setTagItem('')
        setPost({ 
            ...post,
            tags: tagList 
        } as Post)
    }

    const deleteTagItem = (deleteTagItem:string) => {
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
        setTagList([...filteredTagList])
    }

    useEffect(() => {
        if(tagList.length >= 3) setDisabled(true)
        else if(tagList.length < 3) setDisabled(false)
    }, [tagList])

    // useEffect(() => {
    //     if(post) setTagList(post.tags ? post.tags : [])
    // },[])

    return (
        <Form>
            <Input 
                name="title"
                type="text" 
                placeholder="Title"
                value={post.title}
                maxLength={40}
                onChange={(e) => onChangeHandler(e)}
            />
            <TextArea 
                name="description"
                placeholder="Description"
                value={post.description}
                maxLength={1000}
                onChange={(e) => onChangeHandler(e)}
            />
            <TagBox>
                {tagList.map((tagItem, index) => {
                return (
                    <TagItem key={index}>
                        <span>{tagItem}</span>
                        <a className="close" onClick={() => deleteTagItem(tagItem)}>&nbsp;&nbsp;X</a>
                    </TagItem>
                )
                })}
                <TagInput
                    type='text'
                    placeholder='Press enter to add tags'
                    tabIndex={2}
                    onChange={e => setTagItem(e.target.value)}
                    value={tagItem}
                    onKeyPress={(e) => onKeyDownHandler(e)}
                    disabled={disabled}
                />
            </TagBox>
        </Form>
    )
}

