import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Weekly: "weekly",
          Monthly: "monthly",
          Snacks: "snacks",
          Merch: "merch",
          Staff: "staff"
        }
      }
    }
  });
}
