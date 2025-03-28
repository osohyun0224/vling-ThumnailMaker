import { FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa6'
import { AlignList, AlignType, FontFamilyList, FontFamilyType, FontListType } from 'types/tool'

export const alignList: AlignList[] = [
  { key: AlignType.Center, icon: FaAlignCenter },
  { key: AlignType.Left, icon: FaAlignLeft },
  { key: AlignType.Right, icon: FaAlignRight },
]

export const fontSizeList: FontListType[] = [
  { key: 10, label: '10px' },
  { key: 20, label: '20px' },
  { key: 30, label: '30px' },
  { key: 40, label: '40px' },
  { key: 50, label: '50px' },
  { key: 60, label: '60px' },
  { key: 70, label: '70px' },
  { key: 80, label: '80px' },
  { key: 90, label: '90px' },
  { key: 100, label: '100px' },
]

export const fontWeightList: FontListType[] = [
  { key: 100, label: '100' },
  { key: 200, label: '200' },
  { key: 300, label: '300' },
  { key: 400, label: '400' },
  { key: 500, label: '500' },
  { key: 600, label: '600' },
  { key: 700, label: '700' },
  { key: 800, label: '800' },
]

export const fontFamilyList: FontFamilyList[] = [
  { key: FontFamilyType.NanumGothic, label: '나눔고딕(Nanum Gothic)' },
  { key: FontFamilyType.NanumPenScript, label: '나눔손글씨펜(Nanum Pen)' },
  { key: FontFamilyType.NanumMyeongjo, label: '나눔명조(Nanum Myeongjo)' },
  { key: FontFamilyType.NotoSans, label: '본고딕(Noto Sans)' },
  { key: FontFamilyType.NotoSerif, label: '본명조(Noto Serif)' },
  { key: FontFamilyType.BlackHanSans, label: '검은고딕(Black Han Sans)' },
  { key: FontFamilyType.Roboto, label: '로보토(Roboto)' },
  { key: FontFamilyType.SogangUniversity, label: '서강체' },
  { key: FontFamilyType.Diphylleia, label: '산하엽(Diphylleia)' },
  { key: FontFamilyType.Anton, label: '안톤(Anton)' },
  { key: FontFamilyType.GasoekOne, label: '가석(Gasoek One)' },
  { key: FontFamilyType.DMSerifDisplay, label: '기본 글씨체' },
]

export const INIT_BLUR = 3
