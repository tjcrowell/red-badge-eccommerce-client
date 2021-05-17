import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border:1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button{
        border-radius: 5 5 5px 5px;
    }

    img{
        max-height: 250px;
        object-fit: cover ;
        border-radius: 20px 20px 0 0;
    }

    

    input{
        width: 90%;  
        height: 100%;
    }
`;