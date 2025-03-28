import { atom } from 'recoil'
import { AlignType, FontFamilyType, StyleState } from 'types/tool'

export const styleState = atom<StyleState>({
  key: '#styleState',
  default: {
    width: 800,
    height: 400,
    alignType: AlignType.Center,
    fontSize: 50,
    fontWeight: 600,
    fontFamily: FontFamilyType.DMSerifDisplay,
    color: '#d2d2d2',
    backgroundColor: '#eee',
    backgroundImage: null,
    title: '제목을 입력해주세요.',
    subTitle: '부제목을 입력해주세요.',
    blur: null,
  },
})
