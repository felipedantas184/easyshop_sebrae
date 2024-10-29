import styled from "styled-components";

export const Container = styled.header`
  background-color: #5A189A;
  height: 60px;

  display: flex;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 60px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const Bag = styled.div`
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`
export const Badge = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;

	color: #F1F2F3;
	font-size: 12px;
	font-weight: 600;
	background-color: #13131A;

	align-self: flex-start;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 16px;
	height: 16px;
	border-radius: 50%;
`