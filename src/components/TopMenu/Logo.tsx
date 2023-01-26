import styled from 'styled-components';

export default function Logo() {
  return (
    <>
      <LogoStyle>
        <div className='img'>
          <MtgPlaneswalkerSymbol />
        </div>
        <div className='name prevent-select'>Deckhub</div>
      </LogoStyle>
    </>
  );
}

const LogoStyle = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 60px;
  cursor: pointer;
  .img {
    height: 90%;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      height: 100%;
    }
  }
  .name {
    font-size: 26px;
  }
`;

function MtgPlaneswalkerSymbol() {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='667.000000pt'
      height='1196.000000pt'
      viewBox='0 0 667.000000 1196.000000'
      preserveAspectRatio='xMidYMid meet'>
      <g
        transform='translate(0.000000,1196.000000) scale(0.100000,-0.100000)'
        fill='#c0dde1'
        stroke='none'>
        <path
          d='M3327 11936 c-25 -64 -53 -416 -102 -1251 -83 -1429 -143 -2122 -241
-2790 -56 -378 -140 -781 -201 -965 l-18 -55 -185 -17 c-102 -9 -194 -17 -206
-17 -17 -1 -25 11 -43 72 -34 112 -97 438 -135 702 -74 507 -142 1140 -241
2225 -59 647 -82 877 -92 925 l-6 30 -8 -29 c-13 -48 -46 -330 -99 -866 -186
-1864 -306 -2691 -463 -3172 l-31 -98 -111 -36 c-60 -20 -143 -50 -183 -65
-40 -16 -76 -29 -81 -29 -9 0 -87 229 -120 350 -92 339 -174 841 -276 1680
-78 635 -113 871 -135 893 -24 26 -76 -404 -159 -1323 -62 -678 -194 -2302
-188 -2305 1 -1 40 -17 87 -35 47 -18 166 -72 265 -120 732 -356 1359 -918
1850 -1660 596 -900 922 -1958 1050 -3415 42 -473 57 -577 85 -560 18 11 30
84 50 305 82 912 153 1365 301 1915 445 1666 1468 2935 2831 3511 73 31 136
59 140 63 3 3 0 83 -7 176 -8 94 -35 429 -60 745 -133 1670 -241 2739 -275
2704 -23 -25 -54 -226 -139 -924 -103 -834 -164 -1211 -257 -1585 -40 -160
-122 -415 -134 -415 -5 0 -48 15 -97 34 -48 18 -131 47 -184 65 l-95 31 -22
63 c-106 308 -215 909 -317 1748 -43 357 -89 785 -160 1499 -52 515 -76 735
-92 819 -15 85 -25 -1 -113 -964 -153 -1670 -253 -2453 -367 -2864 l-26 -93
-51 5 c-28 4 -120 12 -205 18 l-154 13 -12 30 c-41 99 -128 487 -179 796 -111
676 -179 1415 -266 2890 -57 969 -81 1266 -109 1342 -7 19 -8 19 -14 4z'
        />
      </g>
    </svg>
  );
}
