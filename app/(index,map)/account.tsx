import * as Form from "@/components/ui/Form";
import { IconSymbol } from "@/components/ui/IconSymbol";
import * as AC from "@bacons/apple-colors";
import { Image, View } from "react-native";

export default function Page() {
  return <></>;
}

function AppUpdate({ name, icon }: { name: string; icon: string }) {
  return (
    <View style={{ gap: 16, flex: 1 }}>
      <Form.HStack style={{ gap: 16 }}>
        <Image
          source={{ uri: icon }}
          style={{
            aspectRatio: 1,
            height: 48,
            borderRadius: 12,
          }}
        />
        <View style={{ gap: 4 }}>
          <Form.Text style={Form.FormFont.default}>{name}</Form.Text>
          <Form.Text style={Form.FormFont.caption}>Today</Form.Text>
        </View>

        <View style={{ flex: 1 }} />

        <IconSymbol
          color={AC.systemBlue}
          name="icloud.and.arrow.down"
          weight="bold"
          size={24}
        />
      </Form.HStack>
      <Form.Text>- Minor bug-fixes</Form.Text>
    </View>
  );
}
