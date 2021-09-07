import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Card from "../../components/Card";
import "./index.less";

const Index = () => {
  const [text, seText] = useState<string>('');
  useEffect(() => {
    seText('欢迎来到视在数科技术平台')
  }, []);

  return (
    <View className='index'>
      <Card text={text}></Card>
    </View>
  );
};
export default Index;
