import { AddDiscoveredProps } from "@/interfaces";
import { addDiscoveries } from "@/redux/slices/discoveries";
import { toast } from "sonner";

export default function addDiscovered({
  action,
  dispatch,
  itemID,
  isMobile = false,
}: AddDiscoveredProps) {
  dispatch(addDiscoveries(itemID));
  toast("New place discovered!", {
    action: {
      label: "View",
      onClick: action,
    },
    position: "top-center",
  });
}
