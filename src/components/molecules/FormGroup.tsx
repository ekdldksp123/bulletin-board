import styled from "@emotion/styled";
import { ChangeEventHandler, useEffect, useState } from "react";
import { AddPost, Post } from "../../types/post";
import { Input, TagBox, TagInput, TagItem, TextArea } from "../atom/InputGroup";

const Form = styled.form`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface FormProps {
    post: Post | AddPost<Post>
}

export const PostForm:React.FC<FormProps> = ({post}) => {
    const [formData, setFormData] = useState<Post | AddPost<Post>>({...post});
    const [tagItem, setTagItem] = useState<string>('')
    const [tagList, setTagList] = useState<string[]>(formData.tags ? formData.tags : [])
    const [disabled, setDisabled] = useState<boolean>(false)

    useEffect(() => {
        if(tagList.length >= 3) setDisabled(true)
        else if(tagList.length < 3) setDisabled(false)
    }, [tagList])

    const onChangeHandler = (e:any) => {
        setFormData({[e.target.name]: e.target.value})
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
    }

    const deleteTagItem = (deleteTagItem:string) => {
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
        setTagList([...filteredTagList])
    }

    return (
        <Form>
            <Input 
                name="title"
                type="text" 
                placeholder="Title"
                value={formData.title}
                maxLength={40}
                onChange={(e) => onChangeHandler(e)}
            />
            <TextArea 
                name="description"
                placeholder="Description"
                value={formData.description}
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

