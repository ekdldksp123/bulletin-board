import styled from "@emotion/styled";
import { Input, TextArea } from "../atom/InputGroup";

const Form = styled.form`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostForm:React.FC = () => {
    return (
        <Form>
            <Input 
                name="title"
                type="text" 
                placeholder="Title"
            />
            <TextArea 
                name="description"
                placeholder="Description"
            />
            <Input 
                name="tags"
                type="text" 
                placeholder="Tags"
            />
        </Form>
    )
}