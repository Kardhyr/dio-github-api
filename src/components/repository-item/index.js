import React from "react";
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullName}) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>Nome: </S.WrapperTitle> <span>{name}</span>
            <S.WrapperFullName>Full name:</S.WrapperFullName>
            <S.WrapperLink href={ linkToRepo } target="_blank" rel="noreferrer">{ fullName }</S.WrapperLink>
        </S.Wrapper>
    );
}

export default RepositoryItem;