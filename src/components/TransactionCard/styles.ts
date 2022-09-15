import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreenLight};
    color: ${theme.colors.$brandGreenHover};
  `}
  border-radius: 5px;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`
export const Header = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
    margin-bottom: 5px;
    h4 {
      font-size: 180%;
    }
  `}
`
export const IconEdit = styled(EditIcon)`
  cursor: pointer;
  font-size: 1.4rem;
  color: green;
  &:hover {
    color: black;
  }
`
export const IconTrash = styled(TrashIcon)`
  cursor: pointer;
  color: #A31515;
  font-size: 1.4rem;
  &:hover {
    color: black;
  }
`
export const Body = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  p {
    text-overflow: ellipsis;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  p {
    color: #495057;
    font-size: 1.04rem;
  }
`