import { TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';

import { styles } from './styles';


export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props {
  data: GameCardProps;
}

export function GameCard({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.cover}
        source={data.cover}
      />
    </TouchableOpacity>
  );
}