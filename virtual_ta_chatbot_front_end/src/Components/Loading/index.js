import { Loader } from '@chatscope/chat-ui-kit-react';

export const Loading = ({isvisible, align}) => {
    return (
        isvisible==='true' ?
        <div as="Loader" align={align}  style={{paddingTop:'7px', }}>
            <Loader />
        </div>
        : null
    )
}