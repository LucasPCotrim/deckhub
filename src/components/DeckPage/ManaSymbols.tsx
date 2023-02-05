import styled from 'styled-components';

import wManaSymbol from '../../assets/SymbolMana_W.svg';
import uManaSymbol from '../../assets/SymbolMana_U.svg';
import bManaSymbol from '../../assets/SymbolMana_B.svg';
import rManaSymbol from '../../assets/SymbolMana_R.svg';
import gManaSymbol from '../../assets/SymbolMana_G.svg';
import wPhyrexianManaSymbol from '../../assets/SymbolManaPhyrexian_W.svg';
import uPhyrexianManaSymbol from '../../assets/SymbolManaPhyrexian_U.svg';
import bPhyrexianManaSymbol from '../../assets/SymbolManaPhyrexian_B.svg';
import rPhyrexianManaSymbol from '../../assets/SymbolManaPhyrexian_R.svg';
import gPhyrexianManaSymbol from '../../assets/SymbolManaPhyrexian_G.svg';
import bgHybridManaSymbol from '../../assets/SymbolManaHybrid_BG.svg';
import brHybridManaSymbol from '../../assets/SymbolManaHybrid_BR.svg';
import rgHybridManaSymbol from '../../assets/SymbolManaHybrid_RG.svg';
import ubHybridManaSymbol from '../../assets/SymbolManaHybrid_UB.svg';
import guHybridManaSymbol from '../../assets/SymbolManaHybrid_GU.svg';
import urHybridManaSymbol from '../../assets/SymbolManaHybrid_UR.svg';
import wbHybridManaSymbol from '../../assets/SymbolManaHybrid_WB.svg';
import gwHybridManaSymbol from '../../assets/SymbolManaHybrid_GW.svg';
import rwHybridManaSymbol from '../../assets/SymbolManaHybrid_RW.svg';
import wuHybridManaSymbol from '../../assets/SymbolManaHybrid_WU.svg';
import GenericManaSymbol_0 from '../../assets/SymbolManaGeneric_0.svg';
import GenericManaSymbol_1 from '../../assets/SymbolManaGeneric_1.svg';
import GenericManaSymbol_2 from '../../assets/SymbolManaGeneric_2.svg';
import GenericManaSymbol_3 from '../../assets/SymbolManaGeneric_3.svg';
import GenericManaSymbol_4 from '../../assets/SymbolManaGeneric_4.svg';
import GenericManaSymbol_5 from '../../assets/SymbolManaGeneric_5.svg';
import GenericManaSymbol_6 from '../../assets/SymbolManaGeneric_6.svg';
import GenericManaSymbol_7 from '../../assets/SymbolManaGeneric_7.svg';
import GenericManaSymbol_8 from '../../assets/SymbolManaGeneric_8.svg';
import GenericManaSymbol_9 from '../../assets/SymbolManaGeneric_9.svg';
import GenericManaSymbol_10 from '../../assets/SymbolManaGeneric_10.svg';
import GenericManaSymbol_11 from '../../assets/SymbolManaGeneric_11.svg';
import GenericManaSymbol_12 from '../../assets/SymbolManaGeneric_12.svg';
import GenericManaSymbol_13 from '../../assets/SymbolManaGeneric_13.svg';
import GenericManaSymbol_15 from '../../assets/SymbolManaGeneric_15.svg';
import GenericManaSymbol_16 from '../../assets/SymbolManaGeneric_16.svg';
import GenericManaSymbol_X from '../../assets/SymbolManaGeneric_X.svg';

type Props = {
  manaCostArray: string[];
  imgSize: number;
};
export default function ManaSymbols({ manaCostArray, imgSize }: Props) {
  if (!manaCostArray || manaCostArray.length === 0) return <></>;

  return (
    <>
      <ManaSymbolsStyle size={imgSize} className='prevent-select'>
        {manaCostArray.map((symbol, index) => {
          const imgSrc = getSymbolImage(symbol);
          return <img key={index} src={imgSrc} alt='mana symbol' />;
        })}
      </ManaSymbolsStyle>
    </>
  );
}

function getSymbolImage(symbol: string) {
  if (symbol === '{W}') return wManaSymbol;
  if (symbol === '{U}') return uManaSymbol;
  if (symbol === '{B}') return bManaSymbol;
  if (symbol === '{R}') return rManaSymbol;
  if (symbol === '{G}') return gManaSymbol;
  if (symbol === '{W/P}') return wPhyrexianManaSymbol;
  if (symbol === '{U/P}') return uPhyrexianManaSymbol;
  if (symbol === '{B/P}') return bPhyrexianManaSymbol;
  if (symbol === '{R/P}') return rPhyrexianManaSymbol;
  if (symbol === '{G/P}') return gPhyrexianManaSymbol;
  if (symbol === '{B/G}') return bgHybridManaSymbol;
  if (symbol === '{B/R}') return brHybridManaSymbol;
  if (symbol === '{R/G}') return rgHybridManaSymbol;
  if (symbol === '{U/B}') return ubHybridManaSymbol;
  if (symbol === '{G/U}') return guHybridManaSymbol;
  if (symbol === '{U/R}') return urHybridManaSymbol;
  if (symbol === '{W/B}') return wbHybridManaSymbol;
  if (symbol === '{G/W}') return gwHybridManaSymbol;
  if (symbol === '{R/W}') return rwHybridManaSymbol;
  if (symbol === '{W/U}') return wuHybridManaSymbol;
  if (symbol === '{0}') return GenericManaSymbol_0;
  if (symbol === '{1}') return GenericManaSymbol_1;
  if (symbol === '{2}') return GenericManaSymbol_2;
  if (symbol === '{3}') return GenericManaSymbol_3;
  if (symbol === '{4}') return GenericManaSymbol_4;
  if (symbol === '{5}') return GenericManaSymbol_5;
  if (symbol === '{6}') return GenericManaSymbol_6;
  if (symbol === '{7}') return GenericManaSymbol_7;
  if (symbol === '{8}') return GenericManaSymbol_8;
  if (symbol === '{9}') return GenericManaSymbol_9;
  if (symbol === '{10}') return GenericManaSymbol_10;
  if (symbol === '{11}') return GenericManaSymbol_11;
  if (symbol === '{12}') return GenericManaSymbol_12;
  if (symbol === '{13}') return GenericManaSymbol_13;
  if (symbol === '{15}') return GenericManaSymbol_15;
  if (symbol === '{16}') return GenericManaSymbol_16;
  if (symbol === '{X}') return GenericManaSymbol_X;
  return uManaSymbol;
}

interface ManaSymbolsStyleProps {
  size: number;
}
const ManaSymbolsStyle = styled.div<ManaSymbolsStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  img {
    width: ${(p) => `${p.size}px`};
    height: ${(p) => `${p.size}px`};
  }
`;
