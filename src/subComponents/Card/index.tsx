import { View} from "@tarojs/components";
import { AtNoticebar } from "taro-ui";
import "./index.less";

interface Props {
  text: string;
}

const Card = (props: Props) => {
 
  return (
    <View className='card'>
      <AtNoticebar marquee icon='volume-plus'>
       {props.text}
      </AtNoticebar>
    </View>
  );
};
export default Card;
